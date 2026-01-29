import type { EntityId } from "@/lib/types/ids";
import type { PersonMeta } from "@/lib/types/people";

export const PEOPLE_META: Record<EntityId, Partial<PersonMeta>> = {
  1: { isForceUser: true, isJedi: true, faction: "rebels" },
  4: { isForceUser: true, isSith: true, faction: "empire" },
  10: { isForceUser: true, isJedi: true, faction: "republic" },
  11: { isForceUser: true, isJedi: true, isSith: true },
  20: { isForceUser: true, isJedi: true, faction: "republic" },
  21: { isForceUser: true, isSith: true, faction: "empire" },
  44: { isForceUser: true, isSith: true, faction: "separatists" },
};
