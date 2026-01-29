import type { EntityId } from "./ids";

export type Film = {
  entityId: EntityId;
  id: string; // slug

  title: string;
  episode: number;

  opening_crawl: string;

  director: string;
  producers: string[];

  release_date: string;
  release_year: number;

  characterIds: EntityId[];
  planetIds: EntityId[];
  starshipIds: EntityId[];
  vehicleIds: EntityId[];
  speciesIds: EntityId[];
};
