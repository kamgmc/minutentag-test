import MenuIcon from "@/assets/icons/menu-icon.svg?react";
import styles from "@/components/AppHeader.module.css";

export default function AppHeader() {
  const toggleMenu = () => {
    alert("Menu Toggled");
  };

  return (
    <div className={styles.container}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <MenuIcon height={24} width={24} />
      </button>
      <img
        src="/images/avatar.jpg"
        alt="avatar"
        height={40}
        width={40}
        className={styles.avatar}
      />
    </div>
  );
}
