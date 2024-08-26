import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.card}>
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
              love coding!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
