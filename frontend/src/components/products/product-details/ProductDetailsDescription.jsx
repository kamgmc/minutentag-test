import { useState } from "react";
import styles from "@/components/products/product-details/ProductDetailsDescription.module.css";
import clsx from "clsx";

export default function ProductDetailsDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <p className={clsx(styles.description, isExpanded && styles.expanded)}>
        {description}
      </p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={toggleExpanded}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
}
