import path from "node:path";
import { STARSHIP_META } from "@/data/meta/starships.meta";
import type { Starship } from "@/lib/types/starships";
import type { SwapiStarshipRaw } from "@/lib/types/swapi";
import { extractId } from "@/lib/utils/extractId";
import { filterDefined } from "@/lib/utils/filterDefined";
import { parseDuration } from "@/lib/utils/parseDuration";
import { parseNumber } from "@/lib/utils/parseNumber";
import { parseRange } from "@/lib/utils/parseRange";
import { readJson, writeJson } from "@/lib/utils/readWriteJson";
import { slugify } from "@/lib/utils/slugify";

const RAW_DIR = path.join(process.cwd(), "src/data/raw");
const OUT_DIR = path.join(process.cwd(), "src/data/normalized");

export function normalizeStarships() {
  const starships = readJson<SwapiStarshipRaw[]>(
    path.join(RAW_DIR, "starships.json"),
  );

  const normalized = starships.map((ship): Starship => {
    const entityId = extractId(ship.url);
    if (!entityId) throw new Error(`Starship without entityId: ${ship.name}`);

    const id = slugify(ship.name);

    const meta = STARSHIP_META[id] ?? {
      is_military: false,
      faction: "unknown" as const,
    };

    return {
      entityId,
      id,
      name: ship.name,
      model: ship.model,

      manufacturer: ship.manufacturer.split(",").map((v) => v.trim()),

      class: ship.starship_class,

      cost_credits: parseNumber(ship.cost_in_credits),

      length_m: parseNumber(ship.length),

      crew: parseRange(ship.crew),

      passengers: parseNumber(ship.passengers),

      cargo_capacity: parseNumber(ship.cargo_capacity),

      consumables_days: parseDuration(ship.consumables),

      hyperdrive_rating: parseNumber(ship.hyperdrive_rating),

      mglt: parseNumber(ship.MGLT),

      filmIds: filterDefined(ship.films.map(extractId)),

      meta,
    };
  });

  writeJson(path.join(OUT_DIR, "starships.json"), normalized);

  console.log(`Normalized starships: ${normalized.length}`);
}
