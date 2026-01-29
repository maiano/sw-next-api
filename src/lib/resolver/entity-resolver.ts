import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";
import { registry } from "./registry";

export type { EntityType } from "./registry";

export type Entity = Film | Person | Planet | Species | Starship | Vehicle;

type EntityTypeMap = {
  film: Film;
  person: Person;
  planet: Planet;
  species: Species;
  starship: Starship;
  vehicle: Vehicle;
};

import type { EntityType } from "./registry";

export function resolveEntity<T extends EntityType>(
  type: T,
  ref: number | string,
): EntityTypeMap[T] | null {
  const store = registry[type];

  if (!store) return null;

  // Try numeric ID first
  if (typeof ref === "number") {
    return (store.byId.get(ref) as EntityTypeMap[T]) ?? null;
  }

  // Try parsing as number
  const num = Number(ref);
  if (!Number.isNaN(num)) {
    return (store.byId.get(num) as EntityTypeMap[T]) ?? null;
  }

  // Fallback to slug
  return (store.bySlug.get(ref) as EntityTypeMap[T]) ?? null;
}
