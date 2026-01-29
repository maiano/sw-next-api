import type { EntityId } from "./ids";

export type Vehicle = {
  id: EntityId;
  slug: string;
  name: string;

  model: string;
  manufacturer: string;

  cost: number | null;
  length: number | null;

  crew: number | null;
  passengers: number | null;

  maxSpeed: number | null;
  cargoCapacity: number | null;

  consumables: string;
  vehicleClass: string;

  pilotIds: EntityId[];
  filmIds: EntityId[];
};
