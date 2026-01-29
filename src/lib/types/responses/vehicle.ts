import type { EntityId } from "../ids";
import type { FilmMinimal, PersonMinimal } from "./common";

export type VehicleResponse = {
  entityId: EntityId;
  id: string;
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

  pilots: PersonMinimal[];
  films: FilmMinimal[];
};
