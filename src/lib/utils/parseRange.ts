import { parseNumber } from "./parseNumber";

export function parseRange(
  value?: string,
): { min: number; max: number } | null {
  if (!value) return null;

  if (value.includes("-")) {
    const [minRaw, maxRaw] = value.split("-");

    const min = parseNumber(minRaw);
    const max = parseNumber(maxRaw);

    if (min == null || max == null) return null;

    return { min, max };
  }

  const num = parseNumber(value);
  if (num == null) return null;

  return { min: num, max: num };
}
