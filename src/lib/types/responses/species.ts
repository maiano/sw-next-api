import type { EntityId } from "../ids";
import type { FilmMinimal, PersonMinimal, PlanetMinimal } from "./common";

export type SpeciesResponse = {
  entityId: EntityId;
  id: string;
  name: string;

  classification: string;
  designation: string;

  averageHeight: number | null;
  averageLifespan: number | null;

  skinColors: string[];
  hairColors: string[];
  eyeColors: string[];

  language: string;

  homeworld: PlanetMinimal | null;
  people: PersonMinimal[];
  films: FilmMinimal[];
};
