import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import SWRProvider from "@/lib/swr/SWRProvider.jsx";
import RecoilProvider from "@/lib/recoil/RecoilProvider.jsx";

export default function GlobalProvider({ children }) {
  return (
    <StrictMode>
      <SWRProvider>
        <RecoilProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </RecoilProvider>
      </SWRProvider>
    </StrictMode>
  );
}
