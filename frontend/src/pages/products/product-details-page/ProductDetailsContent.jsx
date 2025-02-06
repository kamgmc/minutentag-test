import { useMemo } from "react";
import clsx from "clsx";
import styles from "@/pages/products/product-details-page/ProductDetailsContent.module.css";
import { getPriceFromCents } from "@/utils/index.js";
import useProductDetails from "@/hooks/useProductDetails.js";
import ProductDetailsDescription from "@/components/products/product-details/ProductDetailsDescription.jsx";
import BagIcon from "@/assets/icons/bag-icon.svg?react";
import { addProductToCart } from "@/services/cart.js";
import { currentProductSizeState } from "@/stores/products.js";
import { useRecoilState } from "recoil";
import useProductSize from "@/hooks/useProductSize.js";
import Loader from "@/components/Loader.jsx";

export default function ProductDetailsContent() {
  const { product, isLoading } = useProductDetails();
  const [productSize, setProductSize] = useRecoilState(currentProductSizeState);
  const { productSizeDetails } = useProductSize(productSize?.code);

  const price = useMemo(
    () => getPriceFromCents(productSizeDetails?.price || 0),
    [productSizeDetails?.price],
  );

  const addToCart = () => {
    addProductToCart(product, product.skus[0]);
  };

  const openCart = () => {
    alert("Open cart");
  };

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.loaderContainer}>
        <p>Error loading product</p>
      </div>
    );
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
          Origin: {product.origin}{" "}
          {productSizeDetails?.stock
            ? `| Stock: ${productSizeDetails?.stock}`
            : null}
        </p>
        <div className={styles.descriptionWrapper}>
          <p className={styles.descriptionTitle}>Description</p>
          <ProductDetailsDescription description={product.information} />
        </div>
        <div className={styles.sizeWrapper}>
          <p className={styles.sizeTitle}>Size</p>
          <div className={styles.sizes}>
            {product?.skus?.map((size) => (
              <button
                key={size.code}
                className={clsx(
                  styles.sizeButton,
                  productSize?.code === size.code && styles.sizeButtonActive,
                )}
                onClick={() => setProductSize(size)}
              >
                {size.name}
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
