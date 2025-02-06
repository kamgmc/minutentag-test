import styles from "@/components/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <p className={styles.loaderText}>Loading...</p>
    </div>
  );
}
