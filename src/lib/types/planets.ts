import type { EntityId } from "./ids";

export type Planet = {
  entityId: EntityId;
  id: string; // slug
  name: string;

  rotationPeriod: number | null;
  orbitalPeriod: number | null;
  diameter: number | null;

  climate: string;
  gravity: string;
  terrain: string;

  surfaceWater: number | null;
  population: number | null;

  residentIds: EntityId[];
  filmIds: EntityId[];
};
