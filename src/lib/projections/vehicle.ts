import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { VehicleResponse } from "@/lib/types/responses";
import type { Vehicle } from "@/lib/types/vehicles";
import { projectFilmMinimal, projectPersonMinimal } from "./common";

export function projectVehicleResponse(
  vehicle: Vehicle,
  pilots: Person[],
  films: Film[],
): VehicleResponse {
  return {
    entityId: vehicle.entityId,
    id: vehicle.id,
    name: vehicle.name,

    model: vehicle.model,
    manufacturer: vehicle.manufacturer,

    cost: vehicle.cost,
    length: vehicle.length,

    crew: vehicle.crew,
    passengers: vehicle.passengers,

    maxSpeed: vehicle.maxSpeed,
    cargoCapacity: vehicle.cargoCapacity,

    consumables: vehicle.consumables,
    vehicleClass: vehicle.vehicleClass,

    pilots: pilots.map(projectPersonMinimal),
    films: films.map(projectFilmMinimal),
  };
}
