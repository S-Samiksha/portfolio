import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import AnimatedEntrance from "../components/AnimatedEntrance/AnimatedEntrance"; // Import the animated entrance component

export default function Home() {
  const [activeTab, setActiveTab] = useState("Programming Languages");
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isAnimationComplete]);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <div>
      <Navbar />
      <main
        className={`${styles.main} ${
          isAnimationComplete ? styles.animated : ""
        }`}
      >
        {/* Intro Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Welcome to My Portfolio</h2>
          <div className={styles.introContainer}>
            <div className={styles.imageContainer}>
              <img
                src={`/portfolio/coffee.png`}
                alt="Cup of Coffee"
                className={styles.image}
              />
            </div>
            <div>
              <p>
                Hi, I'm Samiksha, Sam for short! :) I love coffee and coding,
                and this portfolio showcases some of my work in both Computer
                Science and Economics.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Tech Stack</h2>
          <div className={styles.techStackTabs}>
            <button
              className={`${styles.techStackTab} ${
                activeTab === "Programming Languages" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Programming Languages")}
            >
              Programming Languages
            </button>

            <p>|</p>
            <button
              className={`${styles.techStackTab} ${
                activeTab === "Databases" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Databases")}
            >
              Databases
            </button>

            <p>|</p>
            <button
              className={`${styles.techStackTab} ${
                activeTab === "Data Science" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Data Science")}
            >
              Data Science
            </button>

            <p>|</p>
            <button
              className={`${styles.techStackTab} ${
                activeTab === "AI" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("AI")}
            >
              AI
            </button>
            <p>|</p>
            <button
              className={`${styles.techStackTab} ${
                activeTab === "Cyber" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("Cyber")}
            >
              Cyber
            </button>
            <p>|</p>
            <button
              className={`${styles.techStackTab} ${
                activeTab === "SWE" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("SWE")}
            >
              SWE
            </button>
          </div>

          <div
            className={`${styles.badgeContainer} ${
              activeTab === "Programming Languages" ? styles.active : ""
            }`}
          >
            <img
              src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              alt="C"
            />
            <img
              src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="C++"
            />
            <img
              src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"
              alt="Python"
            />
            <img
              src="https://img.shields.io/static/v1?style=for-the-badge&message=Java&color=007396&logo=Java&logoColor=FFFFFF&label="
              alt="Java"
            />
            <img
              src="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white"
              alt="Solidity"
            />
          </div>

          <div
            className={`${styles.badgeContainer} ${
              activeTab === "Databases" ? styles.active : ""
            }`}
          >
            <img
              src="https://img.shields.io/static/v1?style=for-the-badge&message=MySQL&color=4479A1&logo=MySQL&logoColor=FFFFFF&label="
              alt="MySQL"
            />
            <img
              src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
              alt="Firebase"
            />
            <img
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="Postgres"
            />
            <img
              src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
              alt="SQLite"
            />
          </div>

          <div
            className={`${styles.badgeContainer} ${
              activeTab === "Data Science" ? styles.active : ""
            }`}
          >
            <img
              src="https://img.shields.io/badge/Matplotlib-%23013243.svg?style=for-the-badge&logo=Matplotlib&logoColor=white"
              alt="Matplotlib"
            />
            <img
              src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
              alt="NumPy"
            />
            <img
              src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
              alt="Pandas"
            />
            <img
              src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white"
              alt="Sci-Kit Learn"
            />
            <img
              src="https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white"
              alt="SciPy"
            />
          </div>

          <div
            className={`${styles.badgeContainer} ${
              activeTab === "Cyber" ? styles.active : ""
            }`}
          >
            <img
              src="https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kalilinux&logoColor=white"
              alt="Kali Linux"
            />
            <img
              src="https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white"
              alt="Wireshark"
            />
          </div>

          <div
            className={`${styles.badgeContainer} ${
              activeTab === "SWE" ? styles.active : ""
            }`}
          >
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              alt="JavaScript"
            />
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white"
              alt="FastAPI"
            />
            <img
              src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
              alt="Flask"
            />
          </div>

          <div
            className={`${styles.badgeContainer} ${
              activeTab === "AI" ? styles.active : ""
            }`}
          >
            <img
              src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
              alt="TensorFlow"
            />
            <img
              src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
              alt="PyTorch"
            />
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div>
            <h3>Nanyang Technological University, Singapore</h3>
            <p>
              <i>Double-Degree, Aug 2020 - Jun 2025</i>
            </p>
            <p>Bachelor of Engineering (Honours) Computer Science </p>

            <ul className={styles.bulletPointsTwo}>
              <li>Applied Cryptography</li>
              <li>Security Management</li>
              <li>Malware Analysis</li>
              <li>Blockchain</li>
              <li>Data Analytics and Mining</li>
              <li>Machine Learning</li>
              <li>Distributed Systems</li>
            </ul>
            <hr className={styles.subDivider} />
            <p>Bachelor of Social Sciences (Honours) Economics</p>

            <ul className={styles.bulletPointsTwo}>
              <li>Mathematics for Economics</li>
              <li>Quantitative Economics</li>
              <li>Money and Banking</li>
              <li>Urban Economics</li>
              <li>Health Economics</li>
            </ul>
            <hr className={styles.divider} />
            <h3>London School of Economics, United Kingdom</h3>
            <p>
              <i>Summer School, Jun 2023 - Jul 2023</i>
            </p>
            <p>Modules:</p>
            <ul className={styles.bulletPointsTwo}>
              <li>Political Economy of Public Policy (Grade: A)</li>
              <li>Economics of European Union (Grade: A+) </li>
            </ul>
            <hr className={styles.divider} />
          </div>
        </section>

        {/* Work Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div>
            <h3>Backend AI Intern</h3>
            <p>Ensign Infosecurity, May 2024 - Aug 2024</p>
            <p>
              Developed and deployed AI-driven applications using FastAPI and
              AWS EC2.
            </p>
            <hr className={styles.divider} />
            <h3>Part-Time Research Intern</h3>
            <p>
              Cyber Security Research Centre @ NTU (CYSREN), Aug 2022 - Sep 2022
            </p>
            <p>Research Vulnerabilities on OBD-II ports</p>
            <hr className={styles.divider} />
            <h3>Digital Trust Penetration Testing Intern</h3>
            <p>PwC Singapore, May 2022 - Jul 2022</p>
            <p>
              Performed penetration testing and vulnerability assessments for
              clients.
            </p>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hackathons</h2>
          <div>
            <h3>N0H4TS DIV0 STANDCON </h3>
            <p>Dec 2023</p>
            <hr className={styles.divider} />
            <h3>Bank of America, Code to Connect </h3>
            <p>May 2023</p>
            <hr className={styles.divider} />
            <h3>NTU IEEE X Women in Tech Coding Nights</h3>
            <p>Dec 2021</p>
            <hr className={styles.divider} />
            <h3>DSTA Brain Hack: Today I Learned AI (Rank 13th out of 63)</h3>
            <p>Jun 2021</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
