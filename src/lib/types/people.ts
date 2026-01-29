import type { Faction } from "./faction";
import type { EntityId } from "./ids";

export type PersonMeta = {
  isForceUser: boolean;
  isJedi: boolean;
  isSith: boolean;
  faction: Faction;
};

export type Person = {
  id: EntityId;
  slug: string;
  name: string;

  heightCm: number | null;
  massKg: number | null;

  birthYearBBY: number | null;

  gender: string;

  homeworldId: EntityId | null;

  filmIds: EntityId[];
  speciesIds: EntityId[];
  vehicleIds: EntityId[];
  starshipIds: EntityId[];

  meta: PersonMeta;
};
