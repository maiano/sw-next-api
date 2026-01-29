export type Film = {
  id: string;

  title: string;
  episode: number;

  opening_crawl: string;

  director: string;
  producers: string[];

  release_date: string;
  release_year: number;

  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
};
