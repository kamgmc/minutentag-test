import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
