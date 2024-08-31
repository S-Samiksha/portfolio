// components/AnimatedFront/AnimatedFront.js
import { useEffect, useState } from "react";
import styles from "./AnimatedFront.module.css";

const AnimatedFront = ({ onAnimationEnd }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
      onAnimationEnd();
    }, 3000); // Duration of the animation in milliseconds

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div
      className={`${styles.animatedFront} ${
        animationFinished ? styles.fadeOut : ""
      }`}
    >
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
};

export default AnimatedFront;
