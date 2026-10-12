export function sendJSONResponse(res, statusCode, destination) {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = statusCode;
  res.end(destination);
}

export function getDataByPathParams(location, destinations, locationType) {
  const filteredData = destinations.filter((destination) => {
    return destination[locationType].toLowerCase() === location.toLowerCase();
  });
  return filteredData;
}

export function getDataByQueryParams(data, queryObj) {
  const { continent, country, is_open_to_public } = queryObj;

  if (continent) {
    data = data.filter(
      (destination) =>
        destination.continent.toLowerCase() === continent.toLowerCase(),
    );
  }
  if (country) {
    data = data.filter(
      (destination) =>
        destination.country.toLowerCase() === country.toLowerCase(),
    );
  }
  if (is_open_to_public) {
    data = data.filter(
      (destination) =>
        destination.is_open_to_public ===
        JSON.parse(is_open_to_public.toLowerCase()),
    );
  }

  return data;
}
