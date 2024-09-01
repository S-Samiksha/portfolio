// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled down, remove the top padding
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <button className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </button>
      <ul
        className={`${styles.navList} ${
          isOpen ? styles.active : styles.hidden
        }`}
      >
        <li className={styles.navItem}>
          <Link href="/">&#127968; Home</Link>
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
