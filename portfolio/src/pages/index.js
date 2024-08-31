import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedFront from "../components/AnimatedFront/AnimatedFront"; // Import your AnimatedFront component
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [showFront, setShowFront] = useState(true);

  // Function to handle the end of the animation
  const handleAnimationEnd = () => {
    setShowFront(false);
  };

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className={styles.imageContainer}>
            <img
              src="/coffee.png"
              alt="Cup of Coffee"
              className={styles.coffeeImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I'm Samiksha. Sam for Short! :) I love coffee as much as I
              love coding! Made this simple portfolio for fun, not much of a
              front end coder. Took loads of help from ChatGPT. Phew! I have
              featured my computer science and economics projects under the CS
              and Econs Tabs. Do have a look!
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
