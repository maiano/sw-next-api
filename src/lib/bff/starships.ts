import { projectStarshipResponse } from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { StarshipResponse } from "@/lib/types/responses";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getStarshipFull(id: number | string): StarshipResponse | null {
  const starship = resolveEntity("starship", id);
  if (!starship) return null;

  const films = filterDefined(
    starship.filmIds.map((id) => resolveEntity("film", id)),
  );

  return projectStarshipResponse(starship, films);
}
