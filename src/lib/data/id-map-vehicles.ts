import vehicles from "@/data/normalized/vehicles.json";
import type { EntityId } from "@/lib/types/ids";
import type { Vehicle } from "@/lib/types/vehicles";

const list = vehicles as Vehicle[];

export const vehiclesById = new Map<EntityId, Vehicle>();
export const vehiclesBySlug = new Map<string, Vehicle>();

for (const vehicle of list) {
  vehiclesById.set(vehicle.id, vehicle);
  vehiclesBySlug.set(vehicle.slug, vehicle);
}

export { list as vehicles };
