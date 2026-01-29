import { getStarshipFull } from "@/lib/bff/starships";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const data = getStarshipFull(id);

  if (!data) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(data);
}
