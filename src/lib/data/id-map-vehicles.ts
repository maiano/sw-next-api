import vehicles from "@/data/normalized/vehicles.json";
import type { EntityId } from "@/lib/types/ids";
import type { Vehicle } from "@/lib/types/vehicles";

const list = vehicles as Vehicle[];

export const vehiclesByEntityId = new Map<EntityId, Vehicle>();
export const vehiclesById = new Map<string, Vehicle>();
export const vehiclesBySlug = new Map<string, Vehicle>();

for (const vehicle of list) {
  vehiclesByEntityId.set(vehicle.entityId, vehicle);
  vehiclesById.set(vehicle.id, vehicle);
  vehiclesBySlug.set(vehicle.id, vehicle);
}

export { list as vehicles };
