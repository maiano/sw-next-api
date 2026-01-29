import type { FilterConfig } from "./types";

export function applyFilters<T>(
  items: T[],
  searchParams: URLSearchParams,
  config: FilterConfig<T>,
): T[] {
  let result = items;

  for (const [param, filterConfig] of Object.entries(config)) {
    const value = searchParams.get(param);
    if (!value) continue;

    const { field, type, values } = filterConfig;

    if (type === "enum" && values) {
      if (!values.includes(value)) continue;
    }

    result = result.filter((item) => {
      const itemValue = item[field as keyof T];

      if (type === "number") {
        const numValue = Number(value);
        if (Number.isNaN(numValue)) return true;
        return itemValue === numValue;
      }

      if (type === "string" || type === "enum") {
        return String(itemValue).toLowerCase() === value.toLowerCase();
      }

      return true;
    });
  }

  return result;
}
