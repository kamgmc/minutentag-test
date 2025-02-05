import styles from "@/components/products/ProductList.module.css";
import ProductItem from "@/components/products/ProductItem.jsx";

export default function ProductList({ products }) {
  if (!products) {
    return <p>No products found</p>;
  }

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
