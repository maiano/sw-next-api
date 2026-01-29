import fs from "node:fs";
import path from "node:path";
import { PEOPLE_META } from "@/data/meta/people.meta";
import rawPeople from "@/data/raw/people.json";
import type { Person } from "@/lib/types/people";
import type { SwapiPersonRaw } from "@/lib/types/swapi";
import { extractId } from "@/lib/utils/extractId";
import { filterDefined } from "@/lib/utils/filterDefined";
import { parseNumber } from "@/lib/utils/parseNumber";
import { parseYear } from "@/lib/utils/parseYear";
import { slugify } from "@/lib/utils/slugify";

function normalizePerson(raw: SwapiPersonRaw): Person {
  const id = extractId(raw.url);
  if (!id) throw new Error(`Invalid person url: ${raw.url}`);

  const metaOverride = PEOPLE_META[id] ?? {};

  return {
    id,
    slug: slugify(raw.name),
    name: raw.name,

    heightCm: parseNumber(raw.height),
    massKg: parseNumber(raw.mass),
    birthYearBBY: parseYear(raw.birth_year),

    gender: raw.gender,
    homeworldId: extractId(raw.homeworld),

    filmIds: filterDefined(raw.films.map(extractId)),
    speciesIds: filterDefined(raw.species.map(extractId)),
    vehicleIds: filterDefined(raw.vehicles.map(extractId)),
    starshipIds: filterDefined(raw.starships.map(extractId)),

    meta: {
      isForceUser: false,
      isJedi: false,
      isSith: false,
      faction: "unknown",
      ...metaOverride,
    },
  };
}

export function normalizePeople() {
  const people = (rawPeople as SwapiPersonRaw[]).map(normalizePerson);

  const out = path.resolve(process.cwd(), "src/data/normalized/people.json");

  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(people, null, 2));

  console.log(`People → ${people.length}`);
}
