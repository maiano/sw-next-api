import path from "node:path";
import type { Film } from "@/lib/types/films";
import type { SwapiFilmRaw } from "@/lib/types/swapi";
import { filterDefined } from "@/lib/utils/filterDefined";
import { readJson, writeJson } from "@/lib/utils/readWriteJson";
import { slugify } from "@/lib/utils/slugify";

const RAW_DIR = path.join(process.cwd(), "src/data/raw");
const OUT_DIR = path.join(process.cwd(), "src/data/normalized");

type NamedResource = {
  name?: string;
  title?: string;
  url: string;
};

function extractSlugMap(items: NamedResource[]): Map<string, string> {
  const map = new Map<string, string>();

  items.forEach((item) => {
    const label = item.name ?? item.title;

    if (!label) return;

    map.set(item.url, slugify(label));
  });

  return map;
}

export function normalizeFilms() {
  const films = readJson<SwapiFilmRaw[]>(path.join(RAW_DIR, "films.json"));

  const people = readJson<NamedResource[]>(path.join(RAW_DIR, "people.json"));

  const planets = readJson<NamedResource[]>(path.join(RAW_DIR, "planets.json"));

  const starships = readJson<NamedResource[]>(
    path.join(RAW_DIR, "starships.json"),
  );

  const vehicles = readJson<NamedResource[]>(
    path.join(RAW_DIR, "vehicles.json"),
  );

  const species = readJson<NamedResource[]>(path.join(RAW_DIR, "species.json"));

  const peopleMap = extractSlugMap(people);
  const planetMap = extractSlugMap(planets);
  const starshipMap = extractSlugMap(starships);
  const vehicleMap = extractSlugMap(vehicles);
  const speciesMap = extractSlugMap(species);

  const normalized = films.map((film): Film => {
    const releaseYear = Number(film.release_date.slice(0, 4));

    return {
      id: slugify(film.title),

      title: film.title,
      episode: film.episode_id,

      opening_crawl: film.opening_crawl.replace(/\r\n/g, "\n"),

      director: film.director,

      producers: film.producer.split(",").map((p) => p.trim()),

      release_date: film.release_date,
      release_year: releaseYear,

      characters: filterDefined(
        film.characters.map((url) => peopleMap.get(url)),
      ),

      planets: filterDefined(film.planets.map((url) => planetMap.get(url))),

      starships: filterDefined(
        film.starships.map((url) => starshipMap.get(url)),
      ),

      vehicles: filterDefined(film.vehicles.map((url) => vehicleMap.get(url))),

      species: filterDefined(film.species.map((url) => speciesMap.get(url))),
    };
  });

  writeJson(path.join(OUT_DIR, "films.json"), normalized);

  console.log(`Normalized films: ${normalized.length}`);
}
