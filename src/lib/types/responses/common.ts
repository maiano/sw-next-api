import type { EntityId } from "../ids";

export type FilmMinimal = {
  entityId: EntityId;
  id: string;
  title: string;
  episode: number;
};

export type PersonMinimal = {
  entityId: EntityId;
  id: string;
  name: string;
};

export type PlanetMinimal = {
  entityId: EntityId;
  id: string;
  name: string;
};

export type SpeciesMinimal = {
  entityId: EntityId;
  id: string;
  name: string;
};

export type StarshipMinimal = {
  entityId: EntityId;
  id: string;
  name: string;
};

export type VehicleMinimal = {
  entityId: EntityId;
  id: string;
  name: string;
};
