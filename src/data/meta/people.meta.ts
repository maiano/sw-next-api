import type { EntityId } from "@/lib/types/ids";
import type { PersonMeta } from "@/lib/types/people";

export const PEOPLE_META: Record<EntityId, Partial<PersonMeta>> = {
  1: { isForceUser: true, isJedi: true, faction: "rebels" }, // Luke Skywalker
  4: { isForceUser: true, isSith: true, faction: "empire" }, // Darth Vader
  5: { isForceUser: true, isJedi: false, isSith: false, faction: "rebels" }, // Leia Organa
  10: { isForceUser: true, isJedi: true, faction: "republic" }, // Obi-Wan Kenobi
  11: { isForceUser: true, isJedi: true, isSith: true, faction: "republic" }, // Anakin Skywalker (updated faction)
  20: { isForceUser: true, isJedi: true, faction: "republic" }, // Yoda
  21: { isForceUser: true, isSith: true, faction: "empire" }, // Palpatine
  32: { isForceUser: true, isJedi: true, faction: "republic" }, // Qui-Gon Jinn
  44: { isForceUser: true, isSith: true, faction: "separatists" }, // Darth Maul
  46: { isForceUser: true, isJedi: true, faction: "republic" }, // Aayla Secura
  51: { isForceUser: true, isJedi: true, faction: "republic" }, // Mace Windu
  52: { isForceUser: true, isJedi: true, faction: "republic" }, // Ki-Adi-Mundi
  53: { isForceUser: true, isJedi: true, faction: "republic" }, // Kit Fisto
  54: { isForceUser: true, isJedi: true, faction: "republic" }, // Eeth Koth
  55: { isForceUser: true, isJedi: true, faction: "republic" }, // Adi Gallia
  56: { isForceUser: true, isJedi: true, faction: "republic" }, // Saesee Tiin
  57: { isForceUser: true, isJedi: true, faction: "republic" }, // Yarael Poof
  58: { isForceUser: true, isJedi: true, faction: "republic" }, // Plo Koon
  64: { isForceUser: true, isJedi: true, faction: "republic" }, // Luminara Unduli
  65: { isForceUser: true, isJedi: true, faction: "republic" }, // Barriss Offee
  67: {
    isForceUser: true,
    isJedi: false,
    isSith: true,
    faction: "separatists",
  }, // Dooku
  74: { isForceUser: true, isJedi: true, faction: "republic" }, // Jocasta Nu
  78: { isForceUser: true, isJedi: true, faction: "republic" }, // Shaak Ti
};
