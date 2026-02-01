export function clamp(
  value: number,
  min: number,
  max: number,
  fallback: number,
) {
  if (Number.isNaN(value) || value <= 0) return fallback;
  return Math.min(Math.max(value, min), max);
}
