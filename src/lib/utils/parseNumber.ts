export function parseNumber(value?: string): number | null {
  if (!value) return null;

  const v = value.toLowerCase();

  if (v === "unknown" || v === "n/a") return null;

  const num = Number(v.replace(/,/g, ""));

  return Number.isNaN(num) ? null : num;
}
