// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </button>
      <ul
        className={`${styles.navList} ${
          isOpen ? styles.active : styles.hidden
        }`}
      >
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/csprojects">Computer Science Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/econsprojects">Economics Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
