import { useMemo } from "react";
import { Link } from "react-router";
import styles from "@/components/products/ProductItem.module.css";
import PlusIcon from "@/assets/icons/plus-icon.svg?react";

export default function ProductItem({ product }) {
  const href = useMemo(() => {
    const formattedBrand = product.brand
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

    return `/product/${product.id}-${formattedBrand}`;
  }, [product.id, product.brand]);

  const price = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.price / 100),
    [product.price],
  );

  const addToCart = (e) => {
    e.stopPropagation();
    e.preventDefault()
    alert(`Added to cart: ${product.brand}`);
  };

  const openDetails = () => {
    console.log(`Opening details for ${product.brand}`);
  };

  return (
    <Link
      to={href}
      className={styles.container}
      onClick={openDetails}
    >
      <p className={styles.brand}>{product.brand}</p>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.brand} className={styles.image} />
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price}</p>
        <button className={styles.addToCartButton} onClick={addToCart}>
          <PlusIcon width={24} height={24} />
        </button>
      </div>
    </Link>
  );
}
