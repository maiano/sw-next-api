import type { EntityId } from "../ids";
import type { FilmMinimal, PersonMinimal } from "./common";

export type PlanetResponse = {
  entityId: EntityId;
  id: string;
  name: string;

  rotationPeriod: number | null;
  orbitalPeriod: number | null;
  diameter: number | null;

  climate: string;
  gravity: string;
  terrain: string;

  surfaceWater: number | null;
  population: number | null;

  residents: PersonMinimal[];
  films: FilmMinimal[];
};
