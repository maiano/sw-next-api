import type { StarshipFull } from "@/lib/types/bff";
import { resolveEntity } from "@/lib/resolver";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getStarshipFull(id: number | string): StarshipFull | null {
  const starship = resolveEntity("starship", id);
  if (!starship) return null;

  return {
    ...starship,
    films: filterDefined(
      starship.filmIds.map((id) => resolveEntity("film", id)),
    ),
  };
}
