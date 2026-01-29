import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { PersonResponse } from "@/lib/types/responses";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";
import {
  projectFilmMinimal,
  projectPlanetMinimal,
  projectSpeciesMinimal,
  projectStarshipMinimal,
  projectVehicleMinimal,
} from "./common";

export function projectPersonResponse(
  person: Person,
  homeworld: Planet | null,
  films: Film[],
  species: Species[],
  vehicles: Vehicle[],
  starships: Starship[],
): PersonResponse {
  return {
    entityId: person.entityId,
    id: person.id,
    name: person.name,

    heightCm: person.heightCm,
    massKg: person.massKg,
    birthYearBBY: person.birthYearBBY,
    gender: person.gender,

    homeworld: homeworld ? projectPlanetMinimal(homeworld) : null,
    films: films.map(projectFilmMinimal),
    species: species.map(projectSpeciesMinimal),
    vehicles: vehicles.map(projectVehicleMinimal),
    starships: starships.map(projectStarshipMinimal),

    meta: person.meta,
  };
}
