import ProductDetailsHeader from "@/components/products/product-details/ProductDetailsHeader.jsx";
import ProductDetailsContent from "@/pages/products/product-details-page/ProductDetailsContent.jsx";
import styles from "@/pages/products/product-details-page/ProductDetailsPage.module.css";

export default function ProductDetailsPage() {
  return (
    <div className={styles.container}>
      <ProductDetailsHeader />
      <ProductDetailsContent />
    </div>
  );
}
