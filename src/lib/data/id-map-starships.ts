import starships from "@/data/normalized/starships.json";
import type { EntityId } from "@/lib/types/ids";
import type { Starship } from "@/lib/types/starships";

const list = starships as Starship[];

export const starshipsByEntityId = new Map<EntityId, Starship>();
export const starshipsById = new Map<string, Starship>();
export const starshipsBySlug = new Map<string, Starship>();

for (const starship of list) {
  starshipsByEntityId.set(starship.entityId, starship);
  starshipsById.set(starship.id, starship);
  starshipsBySlug.set(starship.id, starship);
}

export { list as starships };
