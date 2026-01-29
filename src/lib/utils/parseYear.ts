// "19BBY"  → -19
// "5ABY"   → 5
// "unknown" → null

export function parseYear(value: string): number | null {
  if (!value || value === "unknown") return null;

  const match = value.match(/^([\d.]+)(BBY|ABY)$/);
  if (!match) return null;

  const num = Number(match[1]);
  const era = match[2];

  return era === "BBY" ? -num : num;
}
