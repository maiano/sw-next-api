import species from "@/data/normalized/species.json";
import type { EntityId } from "@/lib/types/ids";
import type { Species } from "@/lib/types/species";

const list = species as Species[];

export const speciesByEntityId = new Map<EntityId, Species>();
export const speciesById = new Map<string, Species>();
export const speciesBySlug = new Map<string, Species>();

for (const s of list) {
  speciesByEntityId.set(s.entityId, s);
  speciesById.set(s.id, s);
  speciesBySlug.set(s.id, s);
}

export { list as species };
