import path from "node:path";
import type { SwapiVehicleRaw } from "@/lib/types/swapi";
import type { Vehicle } from "@/lib/types/vehicles";
import { extractId } from "@/lib/utils/extractId";
import { filterDefined } from "@/lib/utils/filterDefined";
import { parseNumber } from "@/lib/utils/parseNumber";
import { readJson, writeJson } from "@/lib/utils/readWriteJson";
import { slugify } from "@/lib/utils/slugify";

const RAW_DIR = path.join(process.cwd(), "src/data/raw");
const OUT_DIR = path.join(process.cwd(), "src/data/normalized");

export function normalizeVehicles() {
  const vehicles = readJson<SwapiVehicleRaw[]>(
    path.join(RAW_DIR, "vehicles.json"),
  );

  const normalized = vehicles.map((vehicle): Vehicle => {
    const entityId = extractId(vehicle.url);

    if (!entityId) {
      throw new Error(`Vehicle without entityId: ${vehicle.name}`);
    }

    return {
      entityId,
      id: slugify(vehicle.name),
      name: vehicle.name,

      model: vehicle.model || "unknown",
      manufacturer: vehicle.manufacturer || "unknown",

      cost: parseNumber(vehicle.cost_in_credits),
      length: parseNumber(vehicle.length),

      crew: parseNumber(vehicle.crew),
      passengers: parseNumber(vehicle.passengers),

      maxSpeed: parseNumber(vehicle.max_atmosphering_speed),
      cargoCapacity: parseNumber(vehicle.cargo_capacity),

      consumables: vehicle.consumables || "unknown",
      vehicleClass: vehicle.vehicle_class || "unknown",

      pilotIds: filterDefined(vehicle.pilots.map(extractId)),
      filmIds: filterDefined(vehicle.films.map(extractId)),
    };
  });

  writeJson(path.join(OUT_DIR, "vehicles.json"), normalized);
  console.log(`Normalized vehicles: ${normalized.length}`);
}
