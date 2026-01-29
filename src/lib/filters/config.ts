import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";
import type { FilterConfig } from "./types";

export const personFilters: FilterConfig<Person> = {
  gender: {
    field: "gender",
    type: "enum",
    values: ["male", "female", "hermaphroditic", "none", "n/a"] as const,
  },
};

export const filmFilters: FilterConfig<Film> = {
  episode: {
    field: "episode",
    type: "number",
  },
};

export const planetFilters: FilterConfig<Planet> = {
  climate: {
    field: "climate",
    type: "string",
  },
  terrain: {
    field: "terrain",
    type: "string",
  },
};

export const speciesFilters: FilterConfig<Species> = {
  classification: {
    field: "classification",
    type: "string",
  },
  designation: {
    field: "designation",
    type: "string",
  },
};

export const starshipFilters: FilterConfig<Starship> = {
  class: {
    field: "class",
    type: "string",
  },
};

export const vehicleFilters: FilterConfig<Vehicle> = {
  vehicleClass: {
    field: "vehicleClass",
    type: "string",
  },
};
