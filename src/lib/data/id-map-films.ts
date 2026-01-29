import films from "@/data/normalized/films.json";
import type { Film } from "@/lib/types/films";

const list = films as Film[];

export const filmsById = new Map<string, Film>();
export const filmsBySlug = new Map<string, Film>();

for (const film of list) {
  filmsById.set(film.id, film);
  filmsBySlug.set(film.id, film);
}

export { list as films };
