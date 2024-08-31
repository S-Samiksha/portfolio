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
          <hr className={styles.divider} />
          <p>
            Hi, I'm Samiksha! Sam for short :) I'm a final year &#127881;
            student at Nanyang Technological University. I enjoy working on
            innovative projects that challenge me and help drive technological
            progress.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Education</h2>
          <hr className={styles.divider} />
          <h3>Nanyang Technological University, Singapore</h3>
          <p>2020 - 2025</p>
          <p>
            <i>Double Degree (5-Year Programme)</i>
          </p>
          <p>
            <i>Bachelor of Engineering (Honours) Computer Science</i>
          </p>
          <ul className={styles.awardsList}>
            <li>Honours (Distinction) | CGPA: 4.48/5.00 (Current)</li>
            <li>Specialization – Cyber Security and Data Science</li>
            <li>
              Relevant Modules: <br />
              &nbsp; &#129474; Applied Cryptography <br />
              &nbsp; &#128209; Security Management Data Analytics and Mining{" "}
              <br />
              &nbsp; &#129309; Distributed Systems
              <br />
              &nbsp; &#128450; Database system and Principles
              <br />
              &nbsp; &#129302; Machine Learning
              <br />
              &nbsp; &#128270; Cyber Threat Intelligence
              <br />
              &nbsp; &#128126; Malware Analysis
              <br />
              &nbsp; &#9939; Blockchain
            </li>
          </ul>
          <p>
            <i>Bachelor of Engineering (Honours) Computer Science</i>
          </p>
          <ul className={styles.awardsList}>
            <li>Honours (Distinction) | CGPA: 4.48/5.00 (Current)</li>

            <li>
              Relevant Modules: <br />
              &nbsp; &#127961; Urban Economics
              <br />
              &nbsp; &#128657; Health Economics
              <br />
              &nbsp; &#128202; Microeconomics and Panel Data
              <br />
              &nbsp; &#128179; Digital Platforms
              <br />
              &nbsp; &#127922; Behavioural Economics
              <br />
              &nbsp; &#128207; Quantitative Economics
              <br />
              &nbsp; &#128208; Mathematics for Economics
            </li>
          </ul>
          <hr className={styles.subDivider} />
          <h3>
            {" "}
            London School of Economics and Political Sciences, United Kingdom
          </h3>
          <p>Jun to Jul 2023</p>
          <p>
            <i>Summer School</i>
          </p>
          <ul className={styles.awardsList}>
            <li>
              Relevant Modules:
              <br /> &nbsp; &#128182; Economics of European Integration
              <br /> &nbsp; &#128226; Political Economy of Public Policy
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Awards</h2>
          <hr className={styles.divider} />
          <ul className={styles.awardsList}>
            <li>
              <b>2020 to 2025</b> &nbsp; - &nbsp; Nanyang Scholarship
            </li>
            <li>
              <b>2020 </b> &nbsp; - &nbsp; Singapore Indian Development
              Association (SINDA) Excellence Award
            </li>
            <li>
              <b>2020 </b> &nbsp; - &nbsp; Academic Award at Anglo-Chinese
              School (Independent){" "}
            </li>
            <li>
              <b>2019 </b> &nbsp; - &nbsp; Dean’s List for Biology by at
              Anglo-Chinese School (Independent){" "}
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Competitions/Programmes</h2>
          <hr className={styles.divider} />
          <ul className={styles.awardsList}>
            <li>
              <b>2023 </b> &nbsp; - &nbsp; N0H4TS DIV0 STANDCON CTF
            </li>
            <li>
              <b>2023 </b> &nbsp; - &nbsp; Bank of America Code to Connect{" "}
            </li>
            <li>
              <b>2021 </b> &nbsp; - &nbsp; NTU IEEE X Women in Tech Coding
              Nights{" "}
            </li>
            <li>
              <b>2021 </b> &nbsp; - &nbsp; DSTA Brain Hack: Today I Learned AI
              (Ranked 13th of 63 Teams){" "}
            </li>
            <li>
              <b>2020 </b> &nbsp; - &nbsp; Shopee Product and Design Challenge{" "}
            </li>
            <li>
              <b>2021 to 2022 </b> &nbsp; - &nbsp; Undergraduate Research
              Experience on CAmpus (URECA) Research Project Programme
            </li>
            <li>
              <b>2019 </b> &nbsp; - &nbsp; Advanced Science Programme at
              Anglo-Chinese School (Independent){" "}
            </li>
            <li>
              <b>2018 </b> &nbsp; - &nbsp; Chairperson for student-initiated
              volunteer projects{" "}
            </li>
            <li>
              {" "}
              <b>2017 </b> &nbsp; - &nbsp; President for Debate and Oratorical
              Society
            </li>
            <li>
              {" "}
              <b>2017 </b> &nbsp; - &nbsp; Singapore and Asian Schools Math
              Olympiad, Bronze
            </li>
            <li>
              <b>2017 </b> &nbsp; - &nbsp; Singapore International Math Olympiad
              Challenge, Bronze
            </li>
            <li>
              {" "}
              <b>2017 </b> &nbsp; - &nbsp; Singapore Junior Biology Olympiad,
              Bronze{" "}
            </li>
            <li>
              {" "}
              <b>2017 </b> &nbsp; - &nbsp; Singapore Junior Chemistry Olympiad,
              Merit{" "}
            </li>
            <li>
              <b>2017 </b> &nbsp; - &nbsp; International Biomedical Quiz, Gold,
              Theme: Medicine and Immunology
            </li>
            <li>
              <b>2015 </b> &nbsp; - &nbsp; Raffles Debate Academy U14 Debating
              Championships, 1st Team Placing
            </li>
            <li>
              <b>2015 </b> &nbsp; - &nbsp; School-Based Science Mentorship
              Programme, 1st Team Placing{" "}
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Work Experience</h2>
          <hr className={styles.divider} />
          <h3>Ensign Infosecurity, Singapore</h3>
          <p>May 2024 - Aug 2024</p>
          <p>Backend AI Intern</p>
          <hr className={styles.subDivider} />
          <h3>Cyber Security Research Centre @ NTU (CYSREN), Singapore</h3>
          <p>Aug 2022 - Sep 2022</p>
          <p>Part Time Research Intern</p>
          <hr className={styles.subDivider} />
          <h3>PwC, Singapore</h3>
          <p>May 2022 - Jul 2022</p>
          <p>Digital Trust Intern - Penetration Testing</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
