import {
  filmsByEntityId,
  peopleByEntityId,
  peopleById,
  planetsByEntityId,
  speciesByEntityId,
  starshipsByEntityId,
  vehiclesByEntityId,
} from "@/lib/data";
import type { EntityId } from "@/lib/types/ids";
import type { PersonFull } from "@/lib/types/bff";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getPerson(entityId: EntityId) {
  return peopleByEntityId.get(entityId) ?? null;
}

export function getPersonBySlug(slug: string) {
  return peopleById.get(slug) ?? null;
}

export function getPersonFull(entityId: EntityId): PersonFull | null {
  const person = peopleByEntityId.get(entityId);
  if (!person) return null;

  return {
    ...person,

    homeworld:
      person.homeworldId != null
        ? (planetsByEntityId.get(person.homeworldId) ?? null)
        : null,

    films: filterDefined(person.filmIds.map((id) => filmsByEntityId.get(id))),

    species: filterDefined(
      person.speciesIds.map((id) => speciesByEntityId.get(id)),
    ),

    vehicles: filterDefined(
      person.vehicleIds.map((id) => vehiclesByEntityId.get(id)),
    ),

    starships: filterDefined(
      person.starshipIds.map((id) => starshipsByEntityId.get(id)),
    ),
  };
}

export function getPersonFullBySlug(slug: string): PersonFull | null {
  const person = peopleById.get(slug);
  return person ? getPersonFull(person.entityId) : null;
}
