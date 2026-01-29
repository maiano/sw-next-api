export type SortOrder = "asc" | "desc";

export type SortParams = {
  field: string;
  order: SortOrder;
};

export function parseSort(value?: string | null): SortParams | null {
  if (!value) return null;

  if (value.startsWith("-")) {
    return { field: value.slice(1), order: "desc" };
  }

  return { field: value, order: "asc" };
}

export function sortBy<T>(
  items: T[],
  field: keyof T,
  order: SortOrder = "asc",
): T[] {
  return [...items].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (aVal === bVal) return 0;

    const comparison = aVal < bVal ? -1 : 1;
    return order === "asc" ? comparison : -comparison;
  });
}
