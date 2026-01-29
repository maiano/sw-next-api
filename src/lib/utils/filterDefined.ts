/**
 * Filters out undefined and null values from an array with proper type narrowing
 */
export function filterDefined<T>(
  arr: (T | undefined | null)[],
): NonNullable<T>[] {
  return arr.filter((x): x is NonNullable<T> => x != null);
}
