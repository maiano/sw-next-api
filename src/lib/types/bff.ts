import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";

export type PersonFull = Omit<
  Person,
  "homeworldId" | "filmIds" | "speciesIds" | "vehicleIds" | "starshipIds"
> & {
  homeworld?: Planet | null;
  films: Film[];
  species: Species[];
  vehicles: Vehicle[];
  starships: Starship[];
};
