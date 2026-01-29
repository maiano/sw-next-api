import { getFilmFull } from "@/lib/bff/films";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const data = getFilmFull(id);

  if (!data) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(data);
}
