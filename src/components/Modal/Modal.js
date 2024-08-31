import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ onClose, children }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
