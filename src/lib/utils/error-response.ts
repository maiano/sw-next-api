export type ErrorResponse = {
  error: string;
  message?: string;
  statusCode: number;
};

export function notFound(message = "Resource not found"): Response {
  return Response.json(
    {
      error: "Not Found",
      message,
      statusCode: 404,
    } satisfies ErrorResponse,
    { status: 404 },
  );
}

export function badRequest(message: string): Response {
  return Response.json(
    {
      error: "Bad Request",
      message,
      statusCode: 400,
    } satisfies ErrorResponse,
    { status: 400 },
  );
}

export function internalError(message = "Internal server error"): Response {
  return Response.json(
    {
      error: "Internal Server Error",
      message,
      statusCode: 500,
    } satisfies ErrorResponse,
    { status: 500 },
  );
}
