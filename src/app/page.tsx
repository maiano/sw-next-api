import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
              Star Wars API
            </h1>
            <Badge variant="info">BFF Edition</Badge>
          </div>
          <a
            href="https://github.com/maiano/sw-api"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">
        {/* Hero Section */}
        <section className="mb-12 text-center sm:mb-24">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Star Wars API
          </h2>
          <p className="mb-2 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Backend for Frontend Edition
          </p>
          <p className="mx-auto mb-4 max-w-2xl text-base text-zinc-500 dark:text-zinc-500 sm:text-lg">
            A modern, frontend-friendly Star Wars API with aggregation, expand,
            filtering and pagination. Educational backend for frontend
            developers.
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            Based on{" "}
            <a
              href="https://swapi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600 dark:hover:text-zinc-400"
            >
              SWAPI
            </a>{" "}
            with extended metadata
          </p>
        </section>

        {/* Problem/Solution */}
        <section className="mb-12 sm:mb-24">
          <h2 className="mb-6 text-center text-2xl font-bold text-zinc-950 dark:text-zinc-50 sm:mb-8 sm:text-3xl">
            Why This API Exists
          </h2>
          <p className="mb-12 text-center text-lg text-zinc-600 dark:text-zinc-400">
            Most Star Wars APIs are data-oriented, not UI-oriented. This API
            uses the{" "}
            <span className="font-semibold text-zinc-950 dark:text-zinc-50">
              Backend for Frontend (BFF)
            </span>{" "}
            pattern to eliminate waterfall requests.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Traditional API */}
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <CardTitle className="text-xl">Traditional API</CardTitle>
                  <Badge variant="warning">5+ requests</Badge>
                </div>
                <CardDescription>
                  Multiple requests to display one character
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`GET /people/1           # Luke Skywalker
GET /planets/1          # Tatooine
GET /films/1            # A New Hope
GET /films/2            # Empire Strikes Back
GET /films/3            # Return of the Jedi
# ... 5+ requests for one character`}
                />
              </CardContent>
            </Card>

            {/* This API */}
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <CardTitle className="text-xl">This API</CardTitle>
                  <Badge variant="success">1 request</Badge>
                </div>
                <CardDescription>
                  All data in a single request with expand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`GET https://sw-next-api.vercel.app/api/v1/people/1?expand=homeworld,films

# 1 request, all data included
# - Character details
# - Homeworld data
# - All films with full info`}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-12 sm:mb-24">
          <h2 className="mb-6 text-center text-2xl font-bold text-zinc-950 dark:text-zinc-50 sm:mb-8 sm:text-3xl">
            Core Features
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Controlled Expansion */}
            <Card>
              <CardHeader>
                <CardTitle>Controlled Expansion</CardTitle>
                <CardDescription>
                  Query exactly what you need with expand parameter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Just basic data
GET https://sw-next-api.vercel.app/api/v1/people/1

# Include homeworld
GET https://sw-next-api.vercel.app/api/v1/people/1?expand=homeworld

# Multiple levels (depth limited to 2)
GET https://sw-next-api.vercel.app/api/v1/people/1?expand=films.characters`}
                />
              </CardContent>
            </Card>

            {/* Smart Pagination */}
            <Card>
              <CardHeader>
                <CardTitle>Smart Pagination</CardTitle>
                <CardDescription>
                  Built-in pagination with page and limit parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`GET https://sw-next-api.vercel.app/api/v1/people?page=2&limit=10`}
                />
                <CodeBlock
                  className="mt-2"
                  language="json"
                  code={`{
  "page": 2,
  "limit": 10,
  "total": 82,
  "pages": 9,
  "results": [...]
}`}
                />
              </CardContent>
            </Card>

            {/* Search & Filter */}
            <Card>
              <CardHeader>
                <CardTitle>Search & Filter</CardTitle>
                <CardDescription>
                  Search by name and filter by attributes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Search by name
GET https://sw-next-api.vercel.app/api/v1/people?search=luke

# Filter by attributes
GET https://sw-next-api.vercel.app/api/v1/people?gender=female

# Sort results
GET https://sw-next-api.vercel.app/api/v1/people?sort=-name`}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-12 sm:mb-24">
          <h2 className="mb-6 text-center text-2xl font-bold text-zinc-950 dark:text-zinc-50 sm:mb-8 sm:text-3xl">
            API Endpoints
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {endpoints.map((endpoint) => (
              <Card key={endpoint.path}>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge>GET</Badge>
                    <CardTitle className="text-lg">{endpoint.name}</CardTitle>
                  </div>
                  <CardDescription className="font-mono text-xs">
                    {endpoint.path}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {endpoint.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Normalized Data */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Normalized & Type-Safe Responses</CardTitle>
              <CardDescription>
                Unlike SWAPI, this API returns normalized, camelCase data with
                TypeScript-ready structure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    Minimal Projections (default)
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Related entities return as minimal objects with{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      entityId
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      id
                    </code>{" "}
                    (slug), and{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      name
                    </code>
                    /
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      title
                    </code>
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    camelCase naming
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    All fields use camelCase (
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      heightCm
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      birthYearBBY
                    </code>
                    ) with proper types (numbers, not strings)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Base URL Info */}
        <section className="mb-8">
          <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/50">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-semibold text-zinc-950 dark:text-zinc-50">
                    Base URL
                  </h3>
                  <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <div>
                      <span className="font-medium">Local development:</span>{" "}
                      <code className="rounded bg-white px-2 py-1 font-mono text-xs dark:bg-zinc-900 sm:text-sm">
                        http://localhost:3000
                      </code>
                    </div>
                    <div>
                      <span className="font-medium">Production:</span>{" "}
                      <code className="rounded bg-white px-2 py-1 font-mono text-xs dark:bg-zinc-900 sm:text-sm">
                        https://sw-next-api.vercel.app
                      </code>
                    </div>
                    <p className="pt-1 text-zinc-600 dark:text-zinc-400">
                      Add base URL to all requests:{" "}
                      <code className="rounded bg-white px-1 py-0.5 dark:bg-zinc-900">
                        https://sw-next-api.vercel.app/api/v1/people/1
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Examples */}
        <section className="mb-12 sm:mb-24">
          <h2 className="mb-6 text-center text-2xl font-bold text-zinc-950 dark:text-zinc-50 sm:mb-8 sm:text-3xl">
            Examples
          </h2>

          <Tabs defaultValue="basic">
            <TabsList className="mb-4 w-full overflow-x-auto sm:mb-6 sm:w-auto">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="expand">With Expand</TabsTrigger>
              <TabsTrigger value="deep">Deep Expand</TabsTrigger>
              <TabsTrigger value="complex">Complex Query</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Basic Request
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Returns normalized data with minimal projections for related
                  entities
                </p>
                <CodeBlock
                  title="Request"
                  language="bash"
                  code="GET https://sw-next-api.vercel.app/api/v1/people/1"
                />
                <CodeBlock
                  title="Response"
                  language="json"
                  code={`{
  "entityId": 1,
  "id": "luke-skywalker",
  "name": "Luke Skywalker",
  "heightCm": 172,
  "massKg": 77,
  "birthYearBBY": -19,
  "gender": "male",
  "homeworld": {
    "entityId": 1,
    "id": "tatooine",
    "name": "Tatooine"
  },
  "films": [
    { "entityId": 1, "id": "a-new-hope", "title": "A New Hope", "episode": 4 },
    { "entityId": 2, "id": "the-empire-strikes-back", "title": "The Empire Strikes Back", "episode": 5 },
    { "entityId": 3, "id": "return-of-the-jedi", "title": "Return of the Jedi", "episode": 6 },
    { "entityId": 6, "id": "revenge-of-the-sith", "title": "Revenge of the Sith", "episode": 3 }
  ],
  "species": [],
  "vehicles": [
    { "entityId": 14, "id": "snowspeeder", "name": "Snowspeeder" },
    { "entityId": 30, "id": "imperial-speeder-bike", "name": "Imperial Speeder Bike" }
  ],
  "starships": [
    { "entityId": 12, "id": "x-wing", "name": "X-wing" },
    { "entityId": 22, "id": "imperial-shuttle", "name": "Imperial shuttle" }
  ],
  "meta": {
    "isForceUser": true,
    "isJedi": true,
    "isSith": false,
    "faction": "rebels"
  }
}`}
                />
              </div>
            </TabsContent>

            <TabsContent value="expand">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Request with Expand
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Expand homeworld to get full planet data (other relations
                  remain minimal)
                </p>
                <CodeBlock
                  title="Request"
                  language="bash"
                  code="GET https://sw-next-api.vercel.app/api/v1/people/1?expand=homeworld"
                />
                <CodeBlock
                  title="Response (partial)"
                  language="json"
                  code={`{
  "entityId": 1,
  "id": "luke-skywalker",
  "name": "Luke Skywalker",
  "heightCm": 172,
  "massKg": 77,
  "birthYearBBY": -19,
  "gender": "male",
  "homeworld": {
    "entityId": 1,
    "id": "tatooine",
    "name": "Tatooine",
    "rotationPeriod": 23,
    "orbitalPeriod": 304,
    "diameter": 10465,
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surfaceWater": 1,
    "population": 200000,
    "residents": [
      { "entityId": 1, "id": "luke-skywalker", "name": "Luke Skywalker" },
      { "entityId": 2, "id": "c-3po", "name": "C-3PO" }
    ],
    "films": [
      { "entityId": 1, "id": "a-new-hope", "title": "A New Hope", "episode": 4 }
    ]
  },
  "films": [
    { "entityId": 1, "id": "a-new-hope", "title": "A New Hope", "episode": 4 }
  ]
}`}
                />
              </div>
            </TabsContent>

            <TabsContent value="deep">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Deep Expansion
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Expand multiple levels (max depth: 2) - films expanded with
                  their characters
                </p>
                <CodeBlock
                  title="Request"
                  language="bash"
                  code="GET https://sw-next-api.vercel.app/api/v1/people/1?expand=films.characters"
                />
                <CodeBlock
                  title="Response (partial)"
                  language="json"
                  code={`{
  "entityId": 1,
  "id": "luke-skywalker",
  "name": "Luke Skywalker",
  "homeworld": {
    "entityId": 1,
    "id": "tatooine",
    "name": "Tatooine"
  },
  "films": [
    {
      "entityId": 1,
      "id": "a-new-hope",
      "title": "A New Hope",
      "episode": 4,
      "opening_crawl": "It is a period of civil war...",
      "director": "George Lucas",
      "producers": ["Gary Kurtz", "Rick McCallum"],
      "release_date": "1977-05-25",
      "release_year": 1977,
      "characters": [
        { "entityId": 1, "id": "luke-skywalker", "name": "Luke Skywalker" },
        { "entityId": 2, "id": "c-3po", "name": "C-3PO" },
        { "entityId": 3, "id": "r2-d2", "name": "R2-D2" }
      ],
      "planets": [
        { "entityId": 1, "id": "tatooine", "name": "Tatooine" }
      ],
      "starships": [
        { "entityId": 2, "id": "cr90-corvette", "name": "CR90 corvette" }
      ],
      "vehicles": [],
      "species": []
    }
  ]
}`}
                />
              </div>
            </TabsContent>

            <TabsContent value="complex">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Complex Query
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Combine search, filter, sort, pagination, and expand
                </p>
                <CodeBlock
                  title="Request"
                  language="bash"
                  code="GET https://sw-next-api.vercel.app/api/v1/people?search=skywalker&gender=male&sort=name&page=1&limit=5&expand=homeworld"
                />
                <CodeBlock
                  title="TypeScript Example"
                  language="typescript"
                  code={`const params = new URLSearchParams({
  search: 'skywalker',
  gender: 'male',
  sort: 'name',
  page: '1',
  limit: '5',
  expand: 'homeworld'
});

const response = await fetch(
  \`https://sw-next-api.vercel.app/api/v1/people?\${params}\`
);
const data = await response.json();

console.log(data.total);          // 3
console.log(data.results.length); // 3
console.log(data.results[0].name); // "Anakin Skywalker"`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Extended Data */}
        <section className="mb-12 sm:mb-24">
          <h2 className="mb-6 text-center text-2xl font-bold text-zinc-950 dark:text-zinc-50 sm:mb-8 sm:text-3xl">
            Extended Metadata
          </h2>
          <p className="mb-8 text-center text-lg text-zinc-600 dark:text-zinc-400">
            Unlike SWAPI, this API includes additional metadata for richer
            queries and filtering
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* People Extensions */}
            <Card>
              <CardHeader>
                <CardTitle>People Extensions</CardTitle>
                <CardDescription>
                  Force abilities and faction affiliations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Badge variant="info" className="mb-2">
                    Force-Sensitive
                  </Badge>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Track Force users with{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      isForceUser
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      isJedi
                    </code>
                    ,{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      isSith
                    </code>
                  </p>
                </div>
                <div>
                  <Badge variant="success" className="mb-2">
                    Factions
                  </Badge>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Filter by faction: rebels, empire, republic, separatists,
                    civilian
                  </p>
                </div>
                <CodeBlock
                  language="bash"
                  code={`# Find all Jedi
GET https://sw-next-api.vercel.app/api/v1/people?isJedi=true

# Find Rebel forces
GET https://sw-next-api.vercel.app/api/v1/people?faction=rebels`}
                />
              </CardContent>
            </Card>

            {/* Starships Extensions */}
            <Card>
              <CardHeader>
                <CardTitle>Starships Extensions</CardTitle>
                <CardDescription>
                  Military classification and faction ownership
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Badge variant="warning" className="mb-2">
                    Military Status
                  </Badge>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Classify ships as military or civilian with{" "}
                    <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-900">
                      is_military
                    </code>
                  </p>
                </div>
                <div>
                  <Badge variant="success" className="mb-2">
                    Faction Ownership
                  </Badge>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Track which faction operates each vessel
                  </p>
                </div>
                <CodeBlock
                  language="bash"
                  code={`# Find Imperial military ships
GET /api/v1/starships?faction=empire&is_military=true`}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>Built with Next.js 16 and TypeScript</p>
          <p className="mt-2">
            Data based on{" "}
            <a
              href="https://swapi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-400"
            >
              SWAPI
            </a>{" "}
            · MIT License
          </p>
        </footer>
      </div>
    </div>
  );
}

// Endpoints data
const endpoints = [
  {
    name: "People",
    path: "/api/v1/people",
    description: "Characters from the Star Wars universe",
  },
  {
    name: "Films",
    path: "/api/v1/films",
    description: "All Star Wars films",
  },
  {
    name: "Planets",
    path: "/api/v1/planets",
    description: "Planets and locations",
  },
  {
    name: "Species",
    path: "/api/v1/species",
    description: "Species and alien races",
  },
  {
    name: "Starships",
    path: "/api/v1/starships",
    description: "Starships and space vessels",
  },
  {
    name: "Vehicles",
    path: "/api/v1/vehicles",
    description: "Ground and atmospheric vehicles",
  },
];
