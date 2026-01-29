import species from "@/data/normalized/species.json";
import type { EntityId } from "@/lib/types/ids";
import type { Species } from "@/lib/types/species";

const list = species as Species[];

export const speciesById = new Map<EntityId, Species>();
export const speciesBySlug = new Map<string, Species>();

for (const s of list) {
  speciesById.set(s.id, s);
  speciesBySlug.set(s.slug, s);
}

export { list as species };
