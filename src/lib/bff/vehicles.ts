import { projectVehicleResponse } from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { VehicleResponse } from "@/lib/types/responses";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getVehicleFull(id: number | string): VehicleResponse | null {
  const vehicle = resolveEntity("vehicle", id);
  if (!vehicle) return null;

  const pilots = filterDefined(
    vehicle.pilotIds.map((id) => resolveEntity("person", id)),
  );

  const films = filterDefined(
    vehicle.filmIds.map((id) => resolveEntity("film", id)),
  );

  return projectVehicleResponse(vehicle, pilots, films);
}
