export function addQuery(parameterName, parameterValue, query) {
    if (!parameterValue)
        return query;
    if (query.length) {
        query += "&";
    }
    query += `${parameterName}=${parameterValue}`;
    return query;
}
