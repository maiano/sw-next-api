import type { SpeciesFull } from "@/lib/types/bff";
import { resolveEntity } from "@/lib/resolver";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getSpeciesFull(id: number | string): SpeciesFull | null {
  const species = resolveEntity("species", id);
  if (!species) return null;

  return {
    ...species,

    homeworld:
      species.homeworldId != null
        ? resolveEntity("planet", species.homeworldId)
        : null,

    people: filterDefined(
      species.peopleIds.map((id) => resolveEntity("person", id)),
    ),

    films: filterDefined(
      species.filmIds.map((id) => resolveEntity("film", id)),
    ),
  };
}
