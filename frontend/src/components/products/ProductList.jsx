import styles from "@/components/products/ProductList.module.css";
import ProductItem from "@/components/products/ProductItem.jsx";
import useProductList from "@/hooks/useProductList.js";
import Loader from "@/components/Loader.jsx";

export default function ProductList() {
  const { products, isLoading } = useProductList();

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (!products) {
    return (
      <div className={styles.loaderContainer}>
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
