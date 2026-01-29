import { resolveEntity } from "@/lib/resolver";
import type { PersonFull } from "@/lib/types/bff";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getPersonFull(id: number | string): PersonFull | null {
  const person = resolveEntity("person", id);
  if (!person) return null;

  return {
    ...person,

    homeworld:
      person.homeworldId != null
        ? resolveEntity("planet", person.homeworldId)
        : null,

    films: filterDefined(person.filmIds.map((id) => resolveEntity("film", id))),

    species: filterDefined(
      person.speciesIds.map((id) => resolveEntity("species", id)),
    ),

    vehicles: filterDefined(
      person.vehicleIds.map((id) => resolveEntity("vehicle", id)),
    ),

    starships: filterDefined(
      person.starshipIds.map((id) => resolveEntity("starship", id)),
    ),
  };
}
