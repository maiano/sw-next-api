import {
  filmsByEntityId,
  filmsById,
  peopleByEntityId,
  planetsByEntityId,
  speciesByEntityId,
  starshipsByEntityId,
  vehiclesByEntityId,
} from "@/lib/data";
import type { EntityId } from "@/lib/types/ids";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getFilm(entityId: EntityId) {
  return filmsByEntityId.get(entityId) ?? null;
}

export function getFilmBySlug(slug: string) {
  return filmsById.get(slug) ?? null;
}

export function getFilmFull(entityId: EntityId) {
  const film = filmsByEntityId.get(entityId);
  if (!film) return null;

  return {
    ...film,

    characters: filterDefined(
      film.characterIds.map((id) => peopleByEntityId.get(id)),
    ),

    planets: filterDefined(
      film.planetIds.map((id) => planetsByEntityId.get(id)),
    ),

    starships: filterDefined(
      film.starshipIds.map((id) => starshipsByEntityId.get(id)),
    ),

    vehicles: filterDefined(
      film.vehicleIds.map((id) => vehiclesByEntityId.get(id)),
    ),

    species: filterDefined(
      film.speciesIds.map((id) => speciesByEntityId.get(id)),
    ),
  };
}

export function getFilmFullBySlug(slug: string) {
  const film = filmsById.get(slug);
  return film ? getFilmFull(film.entityId) : null;
}
