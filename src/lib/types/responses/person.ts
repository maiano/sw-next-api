import type { EntityId } from "../ids";
import type { PersonMeta } from "../people";
import type {
  FilmMinimal,
  PlanetMinimal,
  SpeciesMinimal,
  StarshipMinimal,
  VehicleMinimal,
} from "./common";

export type PersonResponse = {
  entityId: EntityId;
  id: string;
  name: string;

  heightCm: number | null;
  massKg: number | null;
  birthYearBBY: number | null;
  gender: string;

  homeworld: PlanetMinimal | null;
  films: FilmMinimal[];
  species: SpeciesMinimal[];
  vehicles: VehicleMinimal[];
  starships: StarshipMinimal[];

  meta: PersonMeta;
};
