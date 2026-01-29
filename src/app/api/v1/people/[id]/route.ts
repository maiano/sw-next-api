import { getPersonFull, getPersonFullBySlug } from "@/lib/bff/people";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: param } = await params;

  const numericId = Number(param);
  const data = Number.isNaN(numericId)
    ? getPersonFullBySlug(param)
    : getPersonFull(numericId);

  if (!data) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(data);
}
