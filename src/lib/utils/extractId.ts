export function extractId(url: string | null | undefined): number | null {
  if (!url) return null;
  const match = url.match(/\/(\d+)\/?$/);
  return match ? Number(match[1]) : null;
}
