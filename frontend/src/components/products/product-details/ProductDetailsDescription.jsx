import { useMemo, useState } from "react";
import styles from "@/components/products/product-details/ProductDetailsDescription.module.css";

const DESCRIPTION_MAX_LENGTH = 300;

export default function ProductDetailsDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reducedDescription = useMemo(
    () => `${description.slice(0, DESCRIPTION_MAX_LENGTH)}...`,
    [description],
  );

  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <p className={styles.description}>
      {isExpanded ? description : reducedDescription}{" "}
      {description.length > DESCRIPTION_MAX_LENGTH ? (
        <button className={styles.button} onClick={toggleExpansion}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </p>
  );
}
