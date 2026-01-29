import planets from "@/data/normalized/planets.json";
import type { EntityId } from "@/lib/types/ids";
import type { Planet } from "@/lib/types/planets";

const list = planets as Planet[];

export const planetsById = new Map<EntityId, Planet>();
export const planetsBySlug = new Map<string, Planet>();

for (const planet of list) {
  planetsById.set(planet.id, planet);
  planetsBySlug.set(planet.slug, planet);
}

export { list as planets };
