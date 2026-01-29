export function parseDuration(value?: string): number | null {
  if (!value) return null;

  const v = value.toLowerCase();

  if (v === "unknown" || v === "n/a") return null;

  const [amountRaw, unit] = v.split(" ");
  const amount = Number(amountRaw);

  if (Number.isNaN(amount)) return null;

  switch (unit) {
    case "day":
    case "days":
      return amount;

    case "month":
    case "months":
      return amount * 30;

    case "year":
    case "years":
      return amount * 365;

    default:
      return null;
  }
}
