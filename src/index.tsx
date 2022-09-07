import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

import mockServer from "./api/mirage/server";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

// MirageJS mock server is enabled only in DEV environment
// You can change it in .env file
if (process.env.REACT_APP_ENVIRONMENT === "development") {
  mockServer();
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
