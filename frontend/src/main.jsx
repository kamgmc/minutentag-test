import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import "@/styles/preflight.css";
import AppRouter from "@/routes/AppRouter.jsx";
import GlobalProvider from "@/lib/global/GlobalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <AppRouter />
  </GlobalProvider>,
);
