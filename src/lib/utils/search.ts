export function searchBy<T>(
  items: T[],
  query: string,
  fields: (keyof T)[],
): T[] {
  const q = query.toLowerCase();

  return items.filter((item) =>
    fields.some((field) =>
      String(item[field] ?? "")
        .toLowerCase()
        .includes(q),
    ),
  );
}
