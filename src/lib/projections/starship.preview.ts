import type { Film } from "@/lib/types/films";
import type { StarshipResponse } from "@/lib/types/responses";
import type { Starship } from "@/lib/types/starships";
import { projectFilmMinimal } from "./common.preview";

export function projectStarshipResponse(
  starship: Starship,
  films: Film[],
): StarshipResponse {
  return {
    entityId: starship.entityId,
    id: starship.id,
    name: starship.name,
    model: starship.model,

    manufacturer: starship.manufacturer,

    class: starship.class,

    cost_credits: starship.cost_credits,

    length_m: starship.length_m,

    crew: starship.crew,

    passengers: starship.passengers,

    cargo_capacity: starship.cargo_capacity,

    consumables_days: starship.consumables_days,

    hyperdrive_rating: starship.hyperdrive_rating,

    mglt: starship.mglt,

    films: films.map(projectFilmMinimal),

    meta: starship.meta,
  };
}
