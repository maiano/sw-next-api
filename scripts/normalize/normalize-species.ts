import path from "node:path";
import type { Species } from "@/lib/types/species";
import type { SwapiSpeciesRaw } from "@/lib/types/swapi";
import { extractId } from "@/lib/utils/extractId";
import { filterDefined } from "@/lib/utils/filterDefined";
import { parseNumber } from "@/lib/utils/parseNumber";
import { readJson, writeJson } from "@/lib/utils/readWriteJson";
import { slugify } from "@/lib/utils/slugify";

const RAW_DIR = path.join(process.cwd(), "src/data/raw");
const OUT_DIR = path.join(process.cwd(), "src/data/normalized");

export function normalizeSpecies() {
  const species = readJson<SwapiSpeciesRaw[]>(path.join(RAW_DIR, "species.json"));

  const normalized = species.map((s): Species => {
    const id = extractId(s.url);

    if (!id) {
      throw new Error(`Species without id: ${s.name}`);
    }

    return {
      id,
      slug: slugify(s.name),
      name: s.name,

      classification: s.classification || "unknown",
      designation: s.designation || "unknown",

      averageHeight: parseNumber(s.average_height),
      averageLifespan: parseNumber(s.average_lifespan),

      skinColors: s.skin_colors?.split(",").map((v) => v.trim()) || [],
      hairColors: s.hair_colors?.split(",").map((v) => v.trim()) || [],
      eyeColors: s.eye_colors?.split(",").map((v) => v.trim()) || [],

      language: s.language || "unknown",

      homeworldId: extractId(s.homeworld),

      peopleIds: filterDefined(s.people.map(extractId)),
      filmIds: filterDefined(s.films.map(extractId)),
    };
  });

  writeJson(path.join(OUT_DIR, "species.json"), normalized);
  console.log(`Normalized species: ${normalized.length}`);
}
