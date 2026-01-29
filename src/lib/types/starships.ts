import type { Faction } from "./faction";

export type StarshipMeta = {
  is_military: boolean;
  faction: Faction;
};

export type Starship = {
  id: string;
  name: string;
  model: string;

  manufacturer: string[];

  class: string;

  cost_credits: number | null;

  length_m: number | null;

  crew: { min: number; max: number } | number | null;

  passengers: number | null;

  cargo_capacity: number | null;

  consumables_days: number | null;

  hyperdrive_rating: number | null;

  mglt: number | null;

  films: string[];

  meta: StarshipMeta;
};
