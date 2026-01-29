import people from "@/data/normalized/people.json";
import type { EntityId } from "@/lib/types/ids";
import type { Person } from "@/lib/types/people";

const list = people as Person[];

export const peopleByEntityId = new Map<EntityId, Person>();
export const peopleById = new Map<string, Person>();
export const peopleBySlug = new Map<string, Person>();

for (const person of list) {
  peopleByEntityId.set(person.entityId, person);
  peopleById.set(person.id, person);
  peopleBySlug.set(person.id, person);
}

export { list as people };
