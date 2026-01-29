import type { Film } from "@/lib/types/films";
import type { Person } from "@/lib/types/people";
import type { Planet } from "@/lib/types/planets";
import type { Species } from "@/lib/types/species";
import type { Starship } from "@/lib/types/starships";
import type { Vehicle } from "@/lib/types/vehicles";

export type FilmFull = Omit<
  Film,
  "characterIds" | "planetIds" | "starshipIds" | "vehicleIds" | "speciesIds"
> & {
  characters: Person[];
  planets: Planet[];
  starships: Starship[];
  vehicles: Vehicle[];
  species: Species[];
};

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

export type PlanetFull = Omit<Planet, "residentIds" | "filmIds"> & {
  residents: Person[];
  films: Film[];
};

export type SpeciesFull = Omit<
  Species,
  "homeworldId" | "peopleIds" | "filmIds"
> & {
  homeworld: Planet | null;
  people: Person[];
  films: Film[];
};

export type StarshipFull = Omit<Starship, "filmIds"> & {
  films: Film[];
};

export type VehicleFull = Omit<Vehicle, "pilotIds" | "filmIds"> & {
  pilots: Person[];
  films: Film[];
};
