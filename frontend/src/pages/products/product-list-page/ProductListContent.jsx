import styles from "@/pages/products/product-list-page/ProductListContent.module.css";
import ProductList from "@/components/products/ProductList.jsx";

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
