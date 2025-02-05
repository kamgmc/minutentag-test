import { useMemo } from "react";
import clsx from "clsx";
import styles from "@/pages/products/product-details-page/ProductDetailsContent.module.css";
import { getPriceFromCents } from "@/utils/index.js";
import useProductDetails from "@/hooks/useProductDetails.js";
import ProductDetailsDescription from "@/components/products/product-details/ProductDetailsDescription.jsx";
import BagIcon from "@/assets/icons/bag-icon.svg?react";
import { addProductToCart } from "@/services/cart.js";
import { activeProductSkuState } from "@/stores/products.js";
import { useRecoilState } from "recoil";
import useProductStock from "@/hooks/useProductStock.js";

export default function ProductDetailsContent() {
  const { product, isLoading } = useProductDetails();
  const [productSku, setProductSku] = useRecoilState(activeProductSkuState);
  const { productStock } = useProductStock(productSku?.code);

  const price = useMemo(
    () => getPriceFromCents(productStock?.price || 0),
    [productStock?.price],
  );

  const addToCart = () => {
    addProductToCart(product, product.skus[0]);
  };

  const openCart = () => {
    alert("Open cart");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.brand} className={styles.image} />
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.details}>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.price}>{price}</p>
        </div>
        <p className={styles.origin}>
          Origin: {product.origin} | Stock: {productStock?.stock}
        </p>
        <div className={styles.descriptionWrapper}>
          <p className={styles.descriptionTitle}>Description</p>
          <ProductDetailsDescription description={product.information} />
        </div>
        <div className={styles.sizeWrapper}>
          <p className={styles.sizeTitle}>Size</p>
          <div className={styles.sizes}>
            {product?.skus?.map((sku) => (
              <button
                key={sku.code}
                className={clsx(
                  styles.sizeButton,
                  productSku?.code === sku.code && styles.sizeButtonActive,
                )}
                onClick={() => setProductSku(sku)}
              >
                {sku.name}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.cartWrapper}>
          <div className={styles.cart}>
            <button className={styles.cartButton} onClick={openCart}>
              <BagIcon height={24} width={24} />
            </button>
            <button className={styles.addToCartButton} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
