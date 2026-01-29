import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { SpeciesResponse } from "@/lib/types/responses";
import type { Species } from "@/lib/types/species";
import {
  projectFilmMinimal,
  projectPersonMinimal,
  projectPlanetMinimal,
} from "./common.preview";

export function projectSpeciesResponse(
  species: Species,
  homeworld: Planet | null,
  people: Person[],
  films: Film[],
): SpeciesResponse {
  return {
    entityId: species.entityId,
    id: species.id,
    name: species.name,

    classification: species.classification,
    designation: species.designation,

    averageHeight: species.averageHeight,
    averageLifespan: species.averageLifespan,

    skinColors: species.skinColors,
    hairColors: species.hairColors,
    eyeColors: species.eyeColors,

    language: species.language,

    homeworld: homeworld ? projectPlanetMinimal(homeworld) : null,
    people: people.map(projectPersonMinimal),
    films: films.map(projectFilmMinimal),
  };
}
