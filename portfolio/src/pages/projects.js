import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../styles/Projects.module.css";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Project 1</h2>
          <p>Hi,</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
