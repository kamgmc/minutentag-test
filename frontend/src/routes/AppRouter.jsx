import { Route, Routes } from "react-router";
import ProductListPage from "@/pages/products/product-list-page/ProductListPage.jsx";
import ProductDetailsPage from "@/pages/products/product-details-page/ProductDetailsPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/*" element={<ProductDetailsPage />} />
    </Routes>
  );
}
