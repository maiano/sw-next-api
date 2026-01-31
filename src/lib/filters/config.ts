import type { FilterConfig } from "./types";

export const personFilters: FilterConfig = {
  gender: {
    field: "gender",
    type: "enum",
    values: ["male", "female", "hermaphroditic", "none", "n/a"] as const,
  },
  // Meta filters
  isForceUser: {
    field: "meta.isForceUser",
    type: "boolean",
  },
  isJedi: {
    field: "meta.isJedi",
    type: "boolean",
  },
  isSith: {
    field: "meta.isSith",
    type: "boolean",
  },
  faction: {
    field: "meta.faction",
    type: "enum",
    values: [
      "rebels",
      "empire",
      "republic",
      "separatists",
      "civilian",
      "unknown",
    ] as const,
  },
};

export const filmFilters: FilterConfig = {
  episode: {
    field: "episode",
    type: "number",
  },
};

export const planetFilters: FilterConfig = {
  climate: {
    field: "climate",
    type: "string",
  },
  terrain: {
    field: "terrain",
    type: "string",
  },
};

export const speciesFilters: FilterConfig = {
  classification: {
    field: "classification",
    type: "string",
  },
  designation: {
    field: "designation",
    type: "string",
  },
};

export const starshipFilters: FilterConfig = {
  class: {
    field: "class",
    type: "string",
  },
  // Meta filters
  is_military: {
    field: "meta.is_military",
    type: "boolean",
  },
  faction: {
    field: "meta.faction",
    type: "enum",
    values: [
      "rebels",
      "empire",
      "republic",
      "separatists",
      "civilian",
      "unknown",
    ] as const,
  },
};

export const vehicleFilters: FilterConfig = {
  vehicleClass: {
    field: "vehicleClass",
    type: "string",
  },
};
