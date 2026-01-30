import type { Faction } from "@/lib/types/faction";

export const STARSHIP_META: Record<
  string,
  {
    is_military: boolean;
    faction: Faction;
  }
> = {
  "cr90-corvette": {
    is_military: true,
    faction: "rebels",
  },

  "star-destroyer": {
    is_military: true,
    faction: "empire",
  },

  "sentinel-class-landing-craft": {
    is_military: true,
    faction: "empire",
  },

  "death-star": {
    is_military: true,
    faction: "empire",
  },

  "millennium-falcon": {
    is_military: false,
    faction: "rebels",
  },

  "y-wing": {
    is_military: true,
    faction: "rebels",
  },

  "x-wing": {
    is_military: true,
    faction: "rebels",
  },

  "tie-advanced-x1": {
    is_military: true,
    faction: "empire",
  },

  executor: {
    is_military: true,
    faction: "empire",
  },

  "rebel-transport": {
    is_military: false,
    faction: "rebels",
  },

  "slave-1": {
    is_military: true,
    faction: "civilian",
  },

  "imperial-shuttle": {
    is_military: true,
    faction: "empire",
  },

  "ef76-nebulon-b-escort-frigate": {
    is_military: true,
    faction: "rebels",
  },

  "calamari-cruiser": {
    is_military: true,
    faction: "rebels",
  },

  "a-wing": {
    is_military: true,
    faction: "rebels",
  },

  "b-wing": {
    is_military: true,
    faction: "rebels",
  },

  "republic-cruiser": {
    is_military: false,
    faction: "republic",
  },

  "droid-control-ship": {
    is_military: true,
    faction: "separatists",
  },

  "naboo-fighter": {
    is_military: true,
    faction: "republic",
  },

  "naboo-royal-starship": {
    is_military: false,
    faction: "republic",
  },

  scimitar: {
    is_military: true,
    faction: "separatists",
  },

  "j-type-diplomatic-barge": {
    is_military: false,
    faction: "republic",
  },

  "aa-9-coruscant-freighter": {
    is_military: false,
    faction: "civilian",
  },

  "jedi-starfighter": {
    is_military: true,
    faction: "republic",
  },

  "h-type-nubian-yacht": {
    is_military: false,
    faction: "republic",
  },

  "republic-assault-ship": {
    is_military: true,
    faction: "republic",
  },

  "solar-sailer": {
    is_military: false,
    faction: "separatists",
  },

  "trade-federation-cruiser": {
    is_military: true,
    faction: "separatists",
  },

  "theta-class-t-2c-shuttle": {
    is_military: true,
    faction: "republic",
  },

  "republic-attack-cruiser": {
    is_military: true,
    faction: "republic",
  },

  "naboo-star-skiff": {
    is_military: false,
    faction: "republic",
  },

  "jedi-interceptor": {
    is_military: true,
    faction: "republic",
  },

  "arc-170": {
    is_military: true,
    faction: "republic",
  },

  "banking-clan-frigate": {
    is_military: true,
    faction: "separatists",
  },

  "belbullab-22-starfighter": {
    is_military: true,
    faction: "separatists",
  },

  "v-wing": {
    is_military: true,
    faction: "republic",
  },
};
