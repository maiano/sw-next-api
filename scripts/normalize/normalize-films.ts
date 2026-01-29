import path from "node:path";
import type { Film } from "@/lib/types/films";
import type { SwapiFilmRaw } from "@/lib/types/swapi";
import { extractId } from "@/lib/utils/extractId";
import { filterDefined } from "@/lib/utils/filterDefined";
import { readJson, writeJson } from "@/lib/utils/readWriteJson";
import { slugify } from "@/lib/utils/slugify";

const RAW_DIR = path.join(process.cwd(), "src/data/raw");
const OUT_DIR = path.join(process.cwd(), "src/data/normalized");

export function normalizeFilms() {
  const films = readJson<SwapiFilmRaw[]>(path.join(RAW_DIR, "films.json"));

  const normalized = films.map((film): Film => {
    const entityId = extractId(film.url);
    if (!entityId) throw new Error(`Film without entityId: ${film.title}`);

    const releaseYear = Number(film.release_date.slice(0, 4));

    return {
      entityId,
      id: slugify(film.title),

      title: film.title,
      episode: film.episode_id,

      opening_crawl: film.opening_crawl.replace(/\r\n/g, "\n"),

      director: film.director,

      producers: film.producer.split(",").map((p) => p.trim()),

      release_date: film.release_date,
      release_year: releaseYear,

      characterIds: filterDefined(film.characters.map(extractId)),
      planetIds: filterDefined(film.planets.map(extractId)),
      starshipIds: filterDefined(film.starships.map(extractId)),
      vehicleIds: filterDefined(film.vehicles.map(extractId)),
      speciesIds: filterDefined(film.species.map(extractId)),
    };
  });

  writeJson(path.join(OUT_DIR, "films.json"), normalized);

  console.log(`Normalized films: ${normalized.length}`);
}
