import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src={`/portfolio/coffee.png`}
              alt="Cup of Coffee"
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I'm Samiksha. Sam for Short! :) I love coffee as much as I
              love coding! Made this simple portfolio for fun, not much of a
              front end coder. Took loads of help from ChatGPT. Phew! Still in
              Progress... &#128187;
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.textContainer}>
            <h1>Love to Code!</h1>
            <p>
              Have featured my CS projects in the Computer Science Projects Tab.
              Still working on some of write-ups. I also have some Economics
              Projects, do hope over to the Economics Projects Tab as well
              &#128526;
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.textContainer}>
            <h1>I like swimming too</h1>
            <p>For leisure, I'm not very fast! &#128517;</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={`/portfolio/swim.png`}
              alt="Swim"
              className={styles.image}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
