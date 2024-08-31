import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Intro</h2>
          <p>
            Hi, I'm Samiksha! Sam for short :) I'm a final year computer science
            and economics (double degree) student at Nanyang Technological
            University. I enjoy working on innovative projects that challenge me
            and help drive technological progress.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Awards</h2>
          <ul className={styles.awardsList}>
            <li>2020 - Nanyang Scholarship</li>
            <li>
              2020 - Singapore Indian Development Association (SINDA) Excellence
              Award
            </li>
            <li>
              2020 - Academic Award at Anglo-Chinese School (Independent){" "}
            </li>
            <li>
              2019 - Dean’s List for Biology by at Anglo-Chinese School
              (Independent){" "}
            </li>
            <li>2017 - International Biomedical Quiz (Gold) </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Hackathons</h2>
          <ul className={styles.awardsList}>
            <li>2023 - N0H4TS DIV0 STANDCON CTF</li>
            <li>2021 - NTU IEEE X Women in Tech Coding Nights </li>
            <li>2021 - DSTA Brain Hack: Today I Learned AI </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Work Experience</h2>
          <h3>Ensign Infosecurity, Singapore</h3>
          <p>May 2024 - Aug 2024</p>
          <ul className={styles.awardsList}>
            <li>Backend AI Intern</li>
            <li>
              <b>Skills:</b>&nbsp; genAI, prompt engineering, langchain,
              huggingface
            </li>
          </ul>
          <h3>Cyber Security Research Centre @ NTU (CYSREN), Singapore</h3>
          <p>Aug 2022 - Sep 2022</p>
          <ul className={styles.awardsList}>
            <li>Part-Time Research Intern</li>
            <li>
              <b>Skills:</b>&nbsp; Research
            </li>
          </ul>
          <h3>PricewaterhouseCoopers, Singapore</h3>
          <p>May 2022 - Jul 2022</p>
          <ul className={styles.awardsList}>
            <li>Digital Trust Intern</li>
            <li>
              <b>Skills:</b> &nbsp; Kali Linux, Burp Suite Pro, Penetration
              Testing
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
