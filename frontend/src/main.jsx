import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/styles/global.css";
import "@/styles/preflight.css";
import AppRouter from "@/routes/AppRouter.jsx";
import SWRProvider from "@/lib/swr/SWRProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SWRProvider>
        <AppRouter />
      </SWRProvider>
    </BrowserRouter>
  </StrictMode>,
);
