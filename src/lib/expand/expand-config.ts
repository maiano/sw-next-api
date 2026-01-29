import type { EntityType } from "@/lib/resolver/registry";

export type ExpandConfig = {
  [K in EntityType]: {
    [field: string]: string[];
  };
};

export const expandConfig: ExpandConfig = {
  person: {
    homeworld: [],
    films: ["characters", "planets", "starships", "vehicles", "species"],
    species: ["homeworld", "people"],
    starships: [],
    vehicles: [],
  },

  film: {
    characters: ["homeworld", "species"],
    planets: [],
    starships: [],
    vehicles: [],
    species: ["homeworld"],
  },

  planet: {
    residents: ["species"],
    films: ["characters"],
  },

  species: {
    homeworld: [],
    people: ["homeworld"],
    films: ["characters"],
  },

  starship: {
    films: ["characters"],
  },

  vehicle: {
    pilots: ["homeworld"],
    films: ["characters"],
  },
} as const;
