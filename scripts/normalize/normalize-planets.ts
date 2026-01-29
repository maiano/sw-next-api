import path from "node:path";
import type { Planet } from "@/lib/types/planets";
import type { SwapiPlanetRaw } from "@/lib/types/swapi";
import { extractId } from "@/lib/utils/extractId";
import { filterDefined } from "@/lib/utils/filterDefined";
import { parseNumber } from "@/lib/utils/parseNumber";
import { readJson, writeJson } from "@/lib/utils/readWriteJson";
import { slugify } from "@/lib/utils/slugify";

const RAW_DIR = path.join(process.cwd(), "src/data/raw");
const OUT_DIR = path.join(process.cwd(), "src/data/normalized");

export function normalizePlanets() {
  const planets = readJson<SwapiPlanetRaw[]>(path.join(RAW_DIR, "planets.json"));

  const normalized = planets.map((planet): Planet => {
    const id = extractId(planet.url);

    if (!id) {
      throw new Error(`Planet without id: ${planet.name}`);
    }

    return {
      id,
      slug: slugify(planet.name),
      name: planet.name,

      rotationPeriod: parseNumber(planet.rotation_period),
      orbitalPeriod: parseNumber(planet.orbital_period),
      diameter: parseNumber(planet.diameter),

      climate: planet.climate || "unknown",
      gravity: planet.gravity || "unknown",
      terrain: planet.terrain || "unknown",

      surfaceWater: parseNumber(planet.surface_water),
      population: parseNumber(planet.population),

      residentIds: filterDefined(planet.residents.map(extractId)),
      filmIds: filterDefined(planet.films.map(extractId)),
    };
  });

  writeJson(path.join(OUT_DIR, "planets.json"), normalized);
  console.log(`Normalized planets: ${normalized.length}`);
}
