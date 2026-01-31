import type { FilterConfig } from "./types";

// Helper to get nested field value using dot notation
function getNestedValue<T>(obj: T, path: string): unknown {
  return path.split(".").reduce((current: unknown, key) => {
    if (current && typeof current === "object") {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
}

export function applyFilters<T>(
  items: T[],
  searchParams: URLSearchParams,
  config: FilterConfig,
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
      // Support nested fields (e.g., "meta.isJedi")
      const itemValue = field.includes(".")
        ? getNestedValue(item, field)
        : item[field as keyof T];

      if (type === "boolean") {
        const boolValue = value === "true";
        return itemValue === boolValue;
      }

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
