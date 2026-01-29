export type PaginationResult<T> = {
  page: number;
  limit: number;
  total: number;
  pages: number;
  results: T[];
};

export function paginate<T>(
  items: T[],
  page = 1,
  limit = 10,
): PaginationResult<T> {
  const total = items.length;
  const pages = Math.ceil(total / limit);

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    page,
    limit,
    total,
    pages,
    results: items.slice(start, end),
  };
}
