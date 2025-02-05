import useSWR from "swr";
import styles from "./ProductListContent.module.css";
import { api } from "@/constants/api.js";
import ProductList from "@/components/products/ProductList.jsx";

export default function ProductListContent() {
  const { data } = useSWR(api.products);

  return (
    <div className={styles.container}>
      <p className={styles.userGreetings}>Hi Mr. Michael,</p>
      <h2 className={styles.welcomeMessage}>Welcome Back!</h2>
      <h1 className={styles.title}>Our Products</h1>
      <ProductList products={data} />
    </div>
  );
}
