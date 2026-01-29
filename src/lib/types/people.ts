import type { Faction } from "@/lib/types/faction";

export type PersonMeta = {
  isForceUser: boolean;
  isJedi: boolean;
  isSith: boolean;
  faction: Faction;
};

export type Person = {
  id: number;
  slug: string;
  name: string;

  heightCm: number | null;
  massKg: number | null;

  birthYearBBY: number | null;

  gender: string;

  homeworldId: number | null;

  filmIds: number[];
  speciesIds: number[];
  vehicleIds: number[];
  starshipIds: number[];

  meta: PersonMeta;
};
