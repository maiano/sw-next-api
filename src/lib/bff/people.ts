import { projectPersonResponse } from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { PersonResponse } from "@/lib/types/responses";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getPersonFull(id: number | string): PersonResponse | null {
  const person = resolveEntity("person", id);
  if (!person) return null;

  const homeworld =
    person.homeworldId != null
      ? resolveEntity("planet", person.homeworldId)
      : null;

  const films = filterDefined(
    person.filmIds.map((id) => resolveEntity("film", id)),
  );

  const species = filterDefined(
    person.speciesIds.map((id) => resolveEntity("species", id)),
  );

  const vehicles = filterDefined(
    person.vehicleIds.map((id) => resolveEntity("vehicle", id)),
  );

  const starships = filterDefined(
    person.starshipIds.map((id) => resolveEntity("starship", id)),
  );

  return projectPersonResponse(
    person,
    homeworld,
    films,
    species,
    vehicles,
    starships,
  );
}
