import { projectPlanetResponse } from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { PlanetResponse } from "@/lib/types/responses";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getPlanetFull(id: number | string): PlanetResponse | null {
  const planet = resolveEntity("planet", id);
  if (!planet) return null;

  const residents = filterDefined(
    planet.residentIds.map((id) => resolveEntity("person", id)),
  );

  const films = filterDefined(
    planet.filmIds.map((id) => resolveEntity("film", id)),
  );

  return projectPlanetResponse(planet, residents, films);
}
