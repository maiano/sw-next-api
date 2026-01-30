# Star Wars API - BFF Edition

A modern, frontend-friendly Star Wars API built with Next.js 16 and TypeScript.

## Why This API Exists

**This API exists because most Star Wars APIs are data-oriented, not UI-oriented.**

Traditional APIs like SWAPI require multiple requests to display a single UI screen. This project demonstrates how the same data can be exposed in a frontend-friendly way using the Backend for Frontend (BFF) pattern.

### The Problem with Traditional APIs

To display a character with their homeworld and films:

**SWAPI approach:**

```
GET /people/1           # Luke Skywalker
GET /planets/1          # Tatooine
GET /films/1            # A New Hope
GET /films/2            # Empire Strikes Back
GET /films/3            # Return of the Jedi
# ... 5+ requests for one character
```

**This API:**

```
GET /api/v1/people/1?expand=homeworld,films
# 1 request, all data included
```

## Features

### 🚀 Controlled Expansion

Query exactly what you need:
```
# Just basic data (minimal projection)
GET /api/v1/people/1

# Include homeworld
GET /api/v1/people/1?expand=homeworld

# Multiple levels (depth limited to 2)
GET /api/v1/people/1?expand=films.characters
```

### 📄 Smart Pagination

```
GET /api/v1/people?page=2&limit=10

Response:
{
  "page": 2,
  "limit": 10,
  "total": 82,
  "pages": 9,
  "results": [...]
}
```

### 🔍 Search & Filter

```
# Search by name
GET /api/v1/people?search=luke

# Filter by attributes
GET /api/v1/people?gender=female

# Sort results
GET /api/v1/people?sort=-name  # descending
GET /api/v1/films?sort=episode  # ascending
```

### 🎯 Combine Everything

```
GET /api/v1/people?search=skywalker&gender=male&sort=name&page=1&limit=5&expand=homeworld
```

## API Endpoints

### Single Resources

- `GET /api/v1/people/{id}`
- `GET /api/v1/films/{id}`
- `GET /api/v1/planets/{id}`
- `GET /api/v1/species/{id}`
- `GET /api/v1/starships/{id}`
- `GET /api/v1/vehicles/{id}`

### Lists (with pagination, search, filtering, sorting)

- `GET /api/v1/people`
- `GET /api/v1/films`
- `GET /api/v1/planets`
- `GET /api/v1/species`
- `GET /api/v1/starships`
- `GET /api/v1/vehicles`

## Architecture

```
┌─────────────────┐
│   API Routes    │  Next.js API handlers
└────────┬────────┘
         │
┌────────▼────────┐
│   BFF Layer     │  Aggregates related data
└────────┬────────┘
         │
┌────────▼────────┐
│  Projections    │  Transforms to response models
└────────┬────────┘
         │
┌────────▼────────┐
│ Expand System   │  Controlled depth expansion
└────────┬────────┘
         │
┌────────▼────────┐
│   Resolver      │  Universal entity lookup
└────────┬────────┘
         │
┌────────▼────────┐
│  Normalized     │  In-memory data store
│     Data        │
└─────────────────┘
```

### Key Patterns

**BFF (Backend for Frontend):**
- Aggregates multiple entities in one request
- Returns UI-ready data structures
- Eliminates waterfall requests

**Controlled Expansion:**
- Whitelist of expandable fields per entity
- Depth limit prevents graph explosion
- Type-safe expansion tree

**Universal Resolver:**
- Single lookup function for all entities
- Supports both EntityId and slug
- Centralized mapping registry

**Response Projections:**
- Fixed contracts for API responses
- Minimal projections for related entities
- Prevents over-fetching

## Getting Started

```
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

## Example Usage

### Fetch a character with related data

```
const response = await fetch(
  'http://localhost:3000/api/v1/people/1?expand=homeworld,films'
);
const luke = await response.json();

console.log(luke.name);           // "Luke Skywalker"
console.log(luke.homeworld.name); // "Tatooine"
console.log(luke.films.length);   // 4
```

### Search and paginate

```typescript
const response = await fetch(
  'http://localhost:3000/api/v1/people?search=skywalker&page=1&limit=5'
);
const data = await response.json();

console.log(data.total);          // 3
console.log(data.results.length); // 3
console.log(data.results[0].name); // "Luke Skywalker"
```

### Complex query

```typescript
const response = await fetch(
  'http://localhost:3000/api/v1/films?sort=-episode&expand=characters&limit=3'
);
const films = await response.json();

// Latest 3 films, sorted by episode descending, with character data
```

## Technology Stack

- **Next.js 16** - App Router
- **TypeScript** - Full type safety
- **In-memory data** - Fast, no database needed

## License

MIT
