import { Server } from "miragejs";

import { API_BASE_URL } from "../../constants";
import fixtures from "../mirage/fixtures.json";

export default function (server: Server) {
  // Static Handler
  server.get(`${API_BASE_URL}/quotes`, () => {
    return fixtures;
  });
  // Dynamic Segment
  server.get(`${API_BASE_URL}/quotes/:id`, (_, request) => {
    const id = request.params.id;
    return fixtures.results.find((result) => result._id === id) || [];
  });
}
