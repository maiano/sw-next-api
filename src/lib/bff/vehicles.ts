import { resolveEntity } from "@/lib/resolver";
import type { VehicleFull } from "@/lib/types/bff";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getVehicleFull(id: number | string): VehicleFull | null {
  const vehicle = resolveEntity("vehicle", id);
  if (!vehicle) return null;

  return {
    ...vehicle,

    pilots: filterDefined(
      vehicle.pilotIds.map((id) => resolveEntity("person", id)),
    ),

    films: filterDefined(
      vehicle.filmIds.map((id) => resolveEntity("film", id)),
    ),
  };
}
