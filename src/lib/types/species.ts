import type { EntityId } from "./ids";

export type Species = {
  id: EntityId;
  slug: string;
  name: string;

  classification: string;
  designation: string;

  averageHeight: number | null;
  averageLifespan: number | null;

  skinColors: string[];
  hairColors: string[];
  eyeColors: string[];

  language: string;

  homeworldId: EntityId | null;
  peopleIds: EntityId[];
  filmIds: EntityId[];
};
