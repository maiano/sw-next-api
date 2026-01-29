import { resolveEntity } from "@/lib/resolver";
import type { FilmFull } from "@/lib/types/bff";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getFilmFull(id: number | string): FilmFull | null {
  const film = resolveEntity("film", id);
  if (!film) return null;

  return {
    ...film,

    characters: filterDefined(
      film.characterIds.map((id) => resolveEntity("person", id)),
    ),

    planets: filterDefined(
      film.planetIds.map((id) => resolveEntity("planet", id)),
    ),

    starships: filterDefined(
      film.starshipIds.map((id) => resolveEntity("starship", id)),
    ),

    vehicles: filterDefined(
      film.vehicleIds.map((id) => resolveEntity("vehicle", id)),
    ),

    species: filterDefined(
      film.speciesIds.map((id) => resolveEntity("species", id)),
    ),
  };
}
