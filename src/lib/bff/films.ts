import { projectFilmResponse } from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { FilmResponse } from "@/lib/types/responses";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getFilmFull(id: number | string): FilmResponse | null {
  const film = resolveEntity("film", id);
  if (!film) return null;

  const characters = filterDefined(
    film.characterIds.map((id) => resolveEntity("person", id)),
  );

  const planets = filterDefined(
    film.planetIds.map((id) => resolveEntity("planet", id)),
  );

  const starships = filterDefined(
    film.starshipIds.map((id) => resolveEntity("starship", id)),
  );

  const vehicles = filterDefined(
    film.vehicleIds.map((id) => resolveEntity("vehicle", id)),
  );

  const species = filterDefined(
    film.speciesIds.map((id) => resolveEntity("species", id)),
  );

  return projectFilmResponse(
    film,
    characters,
    planets,
    starships,
    vehicles,
    species,
  );
}
