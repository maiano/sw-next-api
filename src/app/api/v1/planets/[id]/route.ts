import { getPlanetFull } from "@/lib/bff/planets";
import { expandEntity, parseExpand } from "@/lib/expand";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const data = getPlanetFull(id);

  if (!data) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const expandParam = searchParams.get("expand");

  if (expandParam) {
    const expandTree = parseExpand(expandParam);
    const expanded = expandEntity(data, "planet", expandTree);
    return Response.json(expanded);
  }

  return Response.json(data);
}
