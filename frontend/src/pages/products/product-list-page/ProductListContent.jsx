import styles from "./ProductListContent.module.css";
import ProductList from "@/components/products/ProductList.jsx";
import useProductList from "@/hooks/useProductList.js";

export default function ProductListContent() {
  const { products, isLoading } = useProductList();

  return (
    <div className={styles.container}>
      <p className={styles.userGreetings}>Hi Mr. Michael,</p>
      <h2 className={styles.welcomeMessage}>Welcome Back!</h2>
      <h1 className={styles.title}>Our Products</h1>
      {isLoading ? <p>Loading...</p> : <ProductList products={products} />}
    </div>
  );
}
