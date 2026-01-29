import { getPersonFull } from "@/lib/bff/people";
import { expandEntity, parseExpand } from "@/lib/expand";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const data = getPersonFull(id);

  if (!data) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const expandParam = searchParams.get("expand");

  if (expandParam) {
    const expandTree = parseExpand(expandParam);
    const expanded = expandEntity(data, "person", expandTree);
    return Response.json(expanded);
  }

  return Response.json(data);
}
