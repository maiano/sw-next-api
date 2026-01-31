# Star Wars API - BFF Edition

A modern, frontend-friendly Star Wars API built with Next.js 16 and TypeScript.

**🌐 Live Demo:** [https://sw-next-api.vercel.app](https://sw-next-api.vercel.app)

**📖 Русская версия:** [README.ru.md](./README.ru.md)

## Base URL

All API endpoints are relative. Prepend your base URL:

- **Local development:** `http://localhost:3000`
- **Production (example):** `https://sw-next-api.vercel.app`

Example: `GET /api/v1/people/1` becomes `GET http://localhost:3000/api/v1/people/1`

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
```bash
# Just basic data (minimal projection)
GET /api/v1/people/1

# Include homeworld
GET /api/v1/people/1?expand=homeworld

# Multiple levels (depth limited to 2)
GET /api/v1/people/1?expand=films.characters
```

### 📄 Smart Pagination

```bash
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

```bash
# Search by name
GET /api/v1/people?search=luke

# Filter by attributes
GET /api/v1/people?gender=female

# Sort results
GET /api/v1/people?sort=-name  # descending
GET /api/v1/films?sort=episode  # ascending
```

### 🎯 Combine Everything

```bash
GET /api/v1/people?search=skywalker&gender=male&sort=name&page=1&limit=5&expand=homeworld
```

### ⚡ Extended Metadata

Unlike SWAPI, this API includes additional metadata:

**People:**
- `isForceUser` - Force-sensitive characters
- `isJedi` / `isSith` - Force alignment
- `faction` - rebels, empire, republic, separatists, civilian

**Starships:**
- `is_military` - Military vs civilian classification
- `faction` - Which faction operates the vessel

```bash
# Find all Jedi
GET /api/v1/people?isJedi=true

# Find Imperial military ships
GET /api/v1/starships?faction=empire&is_military=true
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

## Data Dependency Graph

Film is the central entity connecting all other entity types. Here's the complete relationship structure:

```
                              ┌─────────────────────────────────────┐
                              │              FILM                   │
                              │  (Central Hub - All relationships)  │
                              └──────────┬─────┬─────┬─────────────┘
                                         │     │     │
                    ┌────────────────────┘     │     │
                    │                          │     │
                    ▼                          ▼     ▼
              ┌──────────┐             ┌──────────┐ ┌─────────────┐
              │ PERSON   │◄────────────┤ PLANET   │ │  SPECIES    │
              └────┬─────┘             └──────┬───┘ └─────┬───────┘
                   │                         │           │
                   │   ┌─────────────────┬───┘     ┌─────┘
                   │   │                 │         │
       ┌───────────┼───┼─────────────┐   │   ┌─────┴───────┐
       │           │   │             │   │   │             │
       ▼           ▼   ▼             ▼   ▼   ▼             ▼
  ┌──────────┐ ┌──────────┐ ┌──────────────┐      ┌─────────────┐
  │ STARSHIP │ │ VEHICLE  │ │  (Homeworld) │      │  (Pilots)   │
  └──────────┘ └──────────┘ └──────────────┘      └─────────────┘
```

### Relationship Matrix

| From → To | Type | Bidirectional | Depth Limit |
|-----------|------|---------------|-------------|
| Film → Person | many-to-many | ✓ | 2 |
| Film → Planet | many-to-many | ✓ | 2 |
| Film → Species | many-to-many | ✓ | 2 |
| Film → Starship | many-to-many | ✓ | 2 |
| Film → Vehicle | many-to-many | ✓ | 2 |
| Person → Planet (homeworld) | many-to-one | ✓ | 2 |
| Person → Species | many-to-many | ✓ | 2 |
| Person → Starship | many-to-many | ✗ | 2 |
| Person → Vehicle | many-to-many | ✓ | 2 |
| Species → Planet (homeworld) | many-to-one | ✗ | 2 |

**Key Points:**
- **Maximum expansion depth:** 2 levels (prevents infinite loops)
- **Normalized responses:** Related entities return as minimal objects (`{entityId, id, name}`)
- **Type-safe:** All relationships use `EntityId` for type safety
- **Efficient:** Prevents over-fetching with controlled expansion

### Example Expansion

```typescript
// GET /api/v1/films/1?expand=characters.homeworld

{
  "entityId": 1,
  "title": "A New Hope",
  "characters": [           // Depth 1
    {
      "entityId": 1,
      "name": "Luke Skywalker",
      "homeworld": {        // Depth 2 (stops here)
        "entityId": 1,
        "name": "Tatooine"
      }
    }
  ]
}
```

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

**Normalized Data:**
- camelCase naming (heightCm, birthYearBBY)
- Proper types (numbers instead of strings)
- Minimal objects for relationships

## Getting Started

```bash
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

```typescript
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
console.log(data.results[0].name); // "Anakin Skywalker"
```

### Complex query with filters

```typescript
const response = await fetch(
  'http://localhost:3000/api/v1/people?isJedi=true&faction=republic&expand=homeworld&limit=10'
);
const jedi = await response.json();

// All Jedi from the Republic with their homeworlds
```

## Technology Stack

- **Next.js 16** - App Router with React Server Components
- **TypeScript** - Full type safety across the stack
- **Tailwind CSS 4** - Modern styling with CSS-first approach
- **In-memory data** - Fast, no database needed
- **Vercel** - Serverless deployment

## SEO & Performance

- ✅ JSON-LD structured data for rich snippets
- ✅ OpenGraph & Twitter cards
- ✅ Dynamic OG image generation
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt (API endpoints excluded from indexing)

## License

MIT

---

**Repository:** [github.com/maiano/sw-api](https://github.com/maiano/sw-api)

**Author:** [maiano](https://github.com/maiano)
