import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { FilmResponse } from "@/lib/types/responses";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";
import {
  projectPersonMinimal,
  projectPlanetMinimal,
  projectSpeciesMinimal,
  projectStarshipMinimal,
  projectVehicleMinimal,
} from "./common.preview";

export function projectFilmResponse(
  film: Film,
  characters: Person[],
  planets: Planet[],
  starships: Starship[],
  vehicles: Vehicle[],
  species: Species[],
): FilmResponse {
  return {
    entityId: film.entityId,
    id: film.id,

    title: film.title,
    episode: film.episode,

    opening_crawl: film.opening_crawl,

    director: film.director,
    producers: film.producers,

    release_date: film.release_date,
    release_year: film.release_year,

    characters: characters.map(projectPersonMinimal),
    planets: planets.map(projectPlanetMinimal),
    starships: starships.map(projectStarshipMinimal),
    vehicles: vehicles.map(projectVehicleMinimal),
    species: species.map(projectSpeciesMinimal),
  };
}
