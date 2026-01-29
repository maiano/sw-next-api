import { getSpeciesFull } from "@/lib/bff/species";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const data = getSpeciesFull(id);

  if (!data) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(data);
}
