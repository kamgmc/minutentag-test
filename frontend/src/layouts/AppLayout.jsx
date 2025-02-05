import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";

export default function AppLayout({ children }) {
  return (
    <div className={styles.container}>
      Layout <Outlet />
    </div>
  );
}
