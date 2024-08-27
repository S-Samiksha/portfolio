// Footer.js
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Make sure to install react-icons package
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>&copy; 2024 Samiksha Sankar.</div>
        <div className={styles.iconContainer}>
          <a
            href="https://github.com/S-Samiksha"
            className={styles.footerIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/S-Samiksha"
            className={styles.footerIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
