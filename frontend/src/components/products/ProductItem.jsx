import { useMemo } from "react";
import { Link } from "react-router";
import { useRecoilState } from "recoil";
import styles from "@/components/products/ProductItem.module.css";
import PlusIcon from "@/assets/icons/plus-icon.svg?react";
import { formatBrandToUrl, getPriceFromCents } from "@/utils/index.js";
import { addProductToCart } from "@/services/cart.js";
import { currentProductSizeState } from "@/stores/products.js";

export default function ProductItem({ product }) {
  const [, setProductSize] = useRecoilState(currentProductSizeState);

  const href = useMemo(
    () => `/product/${product.id}-${formatBrandToUrl(product.brand)}`,
    [product.id, product.brand],
  );
  const price = useMemo(
    () => getPriceFromCents(product.price),
    [product.price],
  );

  const addToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addProductToCart(product, product.skus[0]);
  };

  const openDetails = () => {
    setProductSize(product.skus[0]);
  };

  return (
    <Link to={href} className={styles.container} onClick={openDetails}>
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
