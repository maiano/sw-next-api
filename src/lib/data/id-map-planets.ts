import planets from "@/data/normalized/planets.json";
import type { EntityId } from "@/lib/types/ids";
import type { Planet } from "@/lib/types/planets";

const list = planets as Planet[];

export const planetsByEntityId = new Map<EntityId, Planet>();
export const planetsById = new Map<string, Planet>();
export const planetsBySlug = new Map<string, Planet>();

for (const planet of list) {
  planetsByEntityId.set(planet.entityId, planet);
  planetsById.set(planet.id, planet);
  planetsBySlug.set(planet.id, planet);
}

export { list as planets };
