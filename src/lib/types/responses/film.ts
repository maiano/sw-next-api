import type { EntityId } from "../ids";
import type {
  PersonMinimal,
  PlanetMinimal,
  SpeciesMinimal,
  StarshipMinimal,
  VehicleMinimal,
} from "./common";

export type FilmResponse = {
  entityId: EntityId;
  id: string;

  title: string;
  episode: number;

  opening_crawl: string;

  director: string;
  producers: string[];

  release_date: string;
  release_year: number;

  characters: PersonMinimal[];
  planets: PlanetMinimal[];
  starships: StarshipMinimal[];
  vehicles: VehicleMinimal[];
  species: SpeciesMinimal[];
};
