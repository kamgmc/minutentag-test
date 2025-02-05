import AppHeader from "@/components/AppHeader.jsx";
import ProductListContent from "@/pages/products/product-list-page/ProductListContent.jsx";
import styles from "@/pages/products/product-list-page/ProductListPage.module.css";

export default function ProductListPage() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <ProductListContent />
    </div>
  );
}
