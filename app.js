import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import {
  getDataByQueryParams,
  sendJSONResponse,
  getDataByPathParams,
} from "./util.js";

const PORT = 7000;
const server = http.createServer(async (req, res) => {
  const allDestinations = await getDataFromDB();
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryParams = Object.fromEntries(urlObj.searchParams);
  console.log(queryParams);

  if (urlObj.pathname === "/api" && req.method === "GET") {
    let filteredData = getDataByQueryParams(allDestinations, queryParams);

    sendJSONResponse(res, 200, JSON.stringify(filteredData));
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = getDataByPathParams(
      continent,
      allDestinations,
      "continent",
    );

    sendJSONResponse(res, 200, JSON.stringify(filteredData));
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = getDataByPathParams(
      country,
      allDestinations,
      "country",
    );

    sendJSONResponse(res, 200, JSON.stringify(filteredData));
  } else {
    sendJSONResponse(
      res,
      404,
      JSON.stringify({
        error: "not found",
        message: "The requested route does not exist",
      }),
    );
  }
});

server.listen(PORT, () => {
  console.log(`port ${PORT}`);
});
