import { getFilmFull } from "@/lib/bff/films";
import { getPersonFull } from "@/lib/bff/people";
import { getPlanetFull } from "@/lib/bff/planets";
import { getSpeciesFull } from "@/lib/bff/species";
import { getStarshipFull } from "@/lib/bff/starships";
import { getVehicleFull } from "@/lib/bff/vehicles";
import {
  projectFilmMinimal,
  projectPersonMinimal,
  projectPlanetMinimal,
  projectSpeciesMinimal,
  projectStarshipMinimal,
  projectVehicleMinimal,
} from "@/lib/projections";
import { resolveEntity } from "@/lib/resolver";
import type { EntityType } from "@/lib/resolver/registry";
import { expandConfig } from "./expand-config";
import type { ExpandTree } from "./parseExpand";

type ResponseEntity = Record<string, unknown>;

export function expandEntity<T extends ResponseEntity>(
  entity: T,
  type: EntityType,
  expand: ExpandTree,
  depth = 0,
): T {
  if (depth >= 2) return entity;

  const allowed = expandConfig[type];
  if (!allowed) return entity;

  const result = { ...entity } as Record<string, unknown>;

  for (const key in expand) {
    if (!(key in allowed)) continue;

    const children = expand[key];
    const allowedChildren = allowed[key];

    if (!allowedChildren) continue;

    result[key] = resolveRelation(type, result, key, children, depth + 1);
  }

  return result as T;
}

function resolveRelation(
  type: EntityType,
  entity: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  switch (type) {
    case "person":
      return resolvePersonRelation(entity, field, expand, depth);
    case "film":
      return resolveFilmRelation(entity, field, expand, depth);
    case "planet":
      return resolvePlanetRelation(entity, field, expand, depth);
    case "species":
      return resolveSpeciesRelation(entity, field, expand, depth);
    case "starship":
      return resolveStarshipRelation(entity, field, expand, depth);
    case "vehicle":
      return resolveVehicleRelation(entity, field, expand, depth);
    default:
      return null;
  }
}

function expandMinimalEntity(
  field: string,
  entityId: number,
  expand: ExpandTree,
  depth: number,
): unknown {
  const typeMap: Record<string, EntityType> = {
    films: "film",
    characters: "person",
    people: "person",
    homeworld: "planet",
    planets: "planet",
    residents: "person",
    species: "species",
    starships: "starship",
    vehicles: "vehicle",
    pilots: "person",
  };

  const entityType = typeMap[field];
  if (!entityType) return null;

  if (depth >= 2) {
    const entity = resolveEntity(entityType, entityId);
    if (!entity) return null;

    switch (entityType) {
      case "film":
        return projectFilmMinimal(entity as never);
      case "person":
        return projectPersonMinimal(entity as never);
      case "planet":
        return projectPlanetMinimal(entity as never);
      case "species":
        return projectSpeciesMinimal(entity as never);
      case "starship":
        return projectStarshipMinimal(entity as never);
      case "vehicle":
        return projectVehicleMinimal(entity as never);
    }
  }

  let response: ResponseEntity | null = null;

  switch (entityType) {
    case "film":
      response = getFilmFull(entityId);
      break;
    case "person":
      response = getPersonFull(entityId);
      break;
    case "planet":
      response = getPlanetFull(entityId);
      break;
    case "species":
      response = getSpeciesFull(entityId);
      break;
    case "starship":
      response = getStarshipFull(entityId);
      break;
    case "vehicle":
      response = getVehicleFull(entityId);
      break;
  }

  if (!response) return null;

  return expandEntity(response, entityType, expand, depth);
}

function resolvePersonRelation(
  personResponse: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  const value = personResponse[field];

  if (value === null || value === undefined) return value;

  if (Array.isArray(value)) {
    return value.map((item) => {
      if (!item || typeof item !== "object" || !("entityId" in item))
        return item;

      return expandMinimalEntity(field, item.entityId as number, expand, depth);
    });
  }

  if (typeof value === "object" && "entityId" in value) {
    return expandMinimalEntity(field, value.entityId as number, expand, depth);
  }

  return value;
}

function resolveFilmRelation(
  response: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  return resolvePersonRelation(response, field, expand, depth);
}

function resolvePlanetRelation(
  response: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  return resolvePersonRelation(response, field, expand, depth);
}

function resolveSpeciesRelation(
  response: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  return resolvePersonRelation(response, field, expand, depth);
}

function resolveStarshipRelation(
  response: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  return resolvePersonRelation(response, field, expand, depth);
}

function resolveVehicleRelation(
  response: ResponseEntity,
  field: string,
  expand: ExpandTree,
  depth: number,
): unknown {
  return resolvePersonRelation(response, field, expand, depth);
}
