import {
  filmsByEntityId,
  starshipsByEntityId,
  starshipsById,
} from "@/lib/data";
import type { EntityId } from "@/lib/types/ids";
import { filterDefined } from "@/lib/utils/filterDefined";

export function getStarship(entityId: EntityId) {
  return starshipsByEntityId.get(entityId) ?? null;
}

export function getStarshipBySlug(slug: string) {
  return starshipsById.get(slug) ?? null;
}

export function getStarshipFull(entityId: EntityId) {
  const starship = starshipsByEntityId.get(entityId);
  if (!starship) return null;

  return {
    ...starship,
    films: filterDefined(starship.filmIds.map((id) => filmsByEntityId.get(id))),
  };
}

export function getStarshipFullBySlug(slug: string) {
  const starship = starshipsById.get(slug);
  return starship ? getStarshipFull(starship.entityId) : null;
}
