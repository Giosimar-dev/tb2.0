import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { AppRoutes } from "./router/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
