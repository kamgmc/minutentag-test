import BackIcon from "@/assets/icons/back-icon.svg?react";
import DotsIcon from "@/assets/icons/dots-icon.svg?react";
import styles from "@/components/products/product-details/ProductDetailsHeader.module.css";
import { Link } from "react-router";

export default function ProductDetailsHeader() {
  const openMenu = () => {
    alert("Open menu");
  };

  return (
    <div className={styles.container}>
      <Link to="/products" className={styles.button}>
        <BackIcon height={24} width={24} />
      </Link>
      <p className={styles.title}>Detail</p>
      <button className={styles.button} onClick={openMenu}>
        <DotsIcon height={24} width={24} />
      </button>
    </div>
  );
}
