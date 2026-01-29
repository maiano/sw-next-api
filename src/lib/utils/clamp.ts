export function clamp(
  value: number,
  min: number,
  max: number,
  fallback: number,
): number {
  if (Number.isNaN(value)) return fallback;
  return Math.min(Math.max(value, min), max);
}
