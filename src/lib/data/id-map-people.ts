import people from "@/data/normalized/people.json";
import type { EntityId } from "@/lib/types/ids";
import type { Person } from "@/lib/types/people";

const list = people as Person[];

export const peopleById = new Map<EntityId, Person>();
export const peopleBySlug = new Map<string, Person>();

for (const person of list) {
  peopleById.set(person.id, person);
  peopleBySlug.set(person.slug, person);
}

export { list as people };
