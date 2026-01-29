import {
  filmsByEntityId,
  filmsById,
  peopleByEntityId,
  peopleById,
  planetsByEntityId,
  planetsById,
  speciesByEntityId,
  speciesById,
  starshipsByEntityId,
  starshipsById,
  vehiclesByEntityId,
  vehiclesById,
} from "@/lib/data";

export type EntityType =
  | "film"
  | "person"
  | "planet"
  | "species"
  | "starship"
  | "vehicle";

export const registry = {
  film: {
    byId: filmsByEntityId,
    bySlug: filmsById,
  },
  person: {
    byId: peopleByEntityId,
    bySlug: peopleById,
  },
  planet: {
    byId: planetsByEntityId,
    bySlug: planetsById,
  },
  species: {
    byId: speciesByEntityId,
    bySlug: speciesById,
  },
  starship: {
    byId: starshipsByEntityId,
    bySlug: starshipsById,
  },
  vehicle: {
    byId: vehiclesByEntityId,
    bySlug: vehiclesById,
  },
} as const;
