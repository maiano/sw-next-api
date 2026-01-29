import { getStarshipFull } from "@/lib/bff/starships";
import { starships } from "@/lib/data";
import { expandEntity, limitExpandDepth, parseExpand } from "@/lib/expand";
import { applyFilters, starshipFilters } from "@/lib/filters";
import { clamp } from "@/lib/utils/clamp";
import { paginate } from "@/lib/utils/pagination";
import { searchBy } from "@/lib/utils/search";
import { parseSort, sortBy } from "@/lib/utils/sort";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  let data = starships;

  data = applyFilters(data, searchParams, starshipFilters);

  const searchQuery = searchParams.get("search");
  if (searchQuery) {
    data = searchBy(data, searchQuery, ["name"]);
  }

  const sortParams = parseSort(searchParams.get("sort"));
  if (sortParams) {
    data = sortBy(
      data,
      sortParams.field as keyof (typeof starships)[0],
      sortParams.order,
    );
  } else {
    data = sortBy(data, "entityId", "asc");
  }

  const page = clamp(
    Number(searchParams.get("page")),
    1,
    Number.POSITIVE_INFINITY,
    1,
  );
  const limit = clamp(Number(searchParams.get("limit")), 1, 100, 10);

  const paged = paginate(data, page, limit);

  let results = paged.results.map((s) => getStarshipFull(s.entityId)!);

  const expandParam = searchParams.get("expand");
  if (expandParam) {
    const expandTree = parseExpand(expandParam);
    const limitedExpand = limitExpandDepth(expandTree, 1);

    results = results.map((starship) =>
      expandEntity(starship, "starship", limitedExpand),
    );
  }

  return Response.json({
    page: paged.page,
    limit: paged.limit,
    total: paged.total,
    pages: paged.pages,
    results,
  });
}
