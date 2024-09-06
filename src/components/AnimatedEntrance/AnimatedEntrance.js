import { useState, useEffect } from "react";
import styles from "./AnimatedEntrance.module.css";

export default function AnimatedEntrance({ onAnimationComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Animation sequence for showing elements
    const timers = [
      setTimeout(() => setStep(1), 500), // Coffee cup pops up after 500ms
      setTimeout(() => setStep(2), 2000), // Coffee cup fades away after 1500ms
      setTimeout(() => setStep(3), 3000), // Background slides down after coffee fades
      setTimeout(() => onAnimationComplete(), 4500), // Complete the animation after slide down
    ];

    return () => timers.forEach(clearTimeout); // Cleanup
  }, [onAnimationComplete]);

  return (
    <div
      className={`${styles.animatedContainer} ${step >= 3 ? styles.hide : ""}`}
    >
      <div
        className={`${styles.background} ${step >= 3 ? styles.slideDown : ""}`}
      >
        {step >= 1 && (
          <img
            src="/portfolio/coffee.png"
            alt="Coffee Cup"
            className={`${styles.coffeeCup} ${step >= 2 ? styles.fadeOut : ""}`}
          />
        )}
      </div>
    </div>
  );
}
