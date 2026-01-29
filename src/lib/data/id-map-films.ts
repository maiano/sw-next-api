import films from "@/data/normalized/films.json";
import type { EntityId } from "@/lib/types/ids";
import type { Film } from "@/lib/types/films";

const list = films as Film[];

export const filmsByEntityId = new Map<EntityId, Film>();
export const filmsById = new Map<string, Film>();
export const filmsBySlug = new Map<string, Film>();

for (const film of list) {
  filmsByEntityId.set(film.entityId, film);
  filmsById.set(film.id, film);
  filmsBySlug.set(film.id, film);
}

export { list as films };
