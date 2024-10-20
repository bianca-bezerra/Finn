export function addQuery(
  parameterName: string,
  parameterValue: string | undefined | null,
  query: string
): string {
  if (!parameterValue) return query;
  if (query.length) {
    query += "&";
  }
  query += `${parameterName}=${parameterValue}`;
  return query;
}
