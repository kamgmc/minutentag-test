import { Route, Routes } from "react-router";
import AppLayout from "@/layouts/AppLayout.jsx";
import ProductListPage from "@/pages/products/product-list-page/ProductListPage.jsx";
import ProductDescriptionPage from "@/pages/products/ProductDescriptionPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product/*" element={<ProductDescriptionPage />} />
      </Route>
    </Routes>
  );
}
