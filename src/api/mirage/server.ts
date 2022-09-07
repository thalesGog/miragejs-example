import { createServer } from "miragejs";

import mockRoutes from "../mirage/routes";

export default function (environment: "development" | "test" = "development") {
  return createServer({
    environment,
    routes() {
      mockRoutes(this);
    }
  });
}
