import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { PlanetResponse } from "@/lib/types/responses";
import { projectFilmMinimal, projectPersonMinimal } from "./common.preview";

export function projectPlanetResponse(
  planet: Planet,
  residents: Person[],
  films: Film[],
): PlanetResponse {
  return {
    entityId: planet.entityId,
    id: planet.id,
    name: planet.name,

    rotationPeriod: planet.rotationPeriod,
    orbitalPeriod: planet.orbitalPeriod,
    diameter: planet.diameter,

    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,

    surfaceWater: planet.surfaceWater,
    population: planet.population,

    residents: residents.map(projectPersonMinimal),
    films: films.map(projectFilmMinimal),
  };
}
