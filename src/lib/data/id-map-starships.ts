import starships from "@/data/normalized/starships.json";
import type { Starship } from "@/lib/types/starships";

const list = starships as Starship[];

export const starshipsById = new Map<string, Starship>();
export const starshipsBySlug = new Map<string, Starship>();

for (const starship of list) {
  starshipsById.set(starship.id, starship);
  starshipsBySlug.set(starship.id, starship); // id is already a slug for starships
}

export { list as starships };
