import { projectSpeciesResponse } from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { SpeciesResponse } from "@/lib/types/responses";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getSpeciesFull(id: number | string): SpeciesResponse | null {
  const species = resolveEntity("species", id);
  if (!species) return null;

  const homeworld =
    species.homeworldId != null
      ? resolveEntity("planet", species.homeworldId)
      : null;

  const people = filterDefined(
    species.peopleIds.map((id) => resolveEntity("person", id)),
  );

  const films = filterDefined(
    species.filmIds.map((id) => resolveEntity("film", id)),
  );

  return projectSpeciesResponse(species, homeworld, people, films);
}
