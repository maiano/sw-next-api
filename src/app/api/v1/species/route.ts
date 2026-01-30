import { getSpeciesFull } from "@/lib/bff/species";
import { species } from "@/lib/data";
import { expandEntity, limitExpandDepth, parseExpand } from "@/lib/expand";
import { applyFilters, speciesFilters } from "@/lib/filters";
import { clamp } from "@/lib/utils/clamp";
import { internalError } from "@/lib/utils/error-response";
import { paginate } from "@/lib/utils/pagination";
import { searchBy } from "@/lib/utils/search";
import { parseSort, sortBy } from "@/lib/utils/sort";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    let data = species;

    data = applyFilters(data, searchParams, speciesFilters);

    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      data = searchBy(data, searchQuery, ["name"]);
    }

    const sortParams = parseSort(searchParams.get("sort"));
    if (sortParams) {
      data = sortBy(
        data,
        sortParams.field as keyof (typeof species)[0],
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

    const results = paged.results
      .map((s) => getSpeciesFull(s.entityId))
      .filter((s): s is NonNullable<typeof s> => s !== null);

    const expandParam = searchParams.get("expand");
    if (expandParam) {
      const expandTree = parseExpand(expandParam);
      const limitedExpand = limitExpandDepth(expandTree, 1);

      const expanded = results.map((s) =>
        expandEntity(s, "species", limitedExpand),
      );

      return Response.json({
        page: paged.page,
        limit: paged.limit,
        total: paged.total,
        pages: paged.pages,
        results: expanded,
      });
    }

    return Response.json({
      page: paged.page,
      limit: paged.limit,
      total: paged.total,
      pages: paged.pages,
      results,
    });
  } catch (error) {
    console.error("Error in GET /api/v1/species:", error);
    return internalError();
  }
}
