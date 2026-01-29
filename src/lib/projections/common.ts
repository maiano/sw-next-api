import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type {
  FilmMinimal,
  PersonMinimal,
  PlanetMinimal,
  SpeciesMinimal,
  StarshipMinimal,
  VehicleMinimal,
} from "@/lib/types/responses";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";

export function projectFilmMinimal(film: Film): FilmMinimal {
  return {
    entityId: film.entityId,
    id: film.id,
    title: film.title,
    episode: film.episode,
  };
}

export function projectPersonMinimal(person: Person): PersonMinimal {
  return {
    entityId: person.entityId,
    id: person.id,
    name: person.name,
  };
}

export function projectPlanetMinimal(planet: Planet): PlanetMinimal {
  return {
    entityId: planet.entityId,
    id: planet.id,
    name: planet.name,
  };
}

export function projectSpeciesMinimal(species: Species): SpeciesMinimal {
  return {
    entityId: species.entityId,
    id: species.id,
    name: species.name,
  };
}

export function projectStarshipMinimal(starship: Starship): StarshipMinimal {
  return {
    entityId: starship.entityId,
    id: starship.id,
    name: starship.name,
  };
}

export function projectVehicleMinimal(vehicle: Vehicle): VehicleMinimal {
  return {
    entityId: vehicle.entityId,
    id: vehicle.id,
    name: vehicle.name,
  };
}
