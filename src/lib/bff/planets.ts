import { resolveEntity } from "@/lib/resolver";
import type { PlanetFull } from "@/lib/types/bff";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getPlanetFull(id: number | string): PlanetFull | null {
  const planet = resolveEntity("planet", id);
  if (!planet) return null;

  return {
    ...planet,

    residents: filterDefined(
      planet.residentIds.map((id) => resolveEntity("person", id)),
    ),

    films: filterDefined(planet.filmIds.map((id) => resolveEntity("film", id))),
  };
}
