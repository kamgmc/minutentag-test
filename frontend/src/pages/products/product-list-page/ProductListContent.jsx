import styles from "./ProductListContent.module.css";
import ProductList from "@/components/products/ProductList.jsx";
import useProductList from "@/hooks/useProductList.js";
import Loader from "@/components/Loader.jsx";

export default function ProductListContent() {
  return (
    <div className={styles.container}>
      <p className={styles.userGreetings}>Hi Mr. Michael,</p>
      <h2 className={styles.welcomeMessage}>Welcome Back!</h2>
      <h1 className={styles.title}>Our Products</h1>
      <ProductList />
    </div>
  );
}
