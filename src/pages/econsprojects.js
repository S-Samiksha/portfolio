import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Projects.module.css";
import { FaGithub } from "react-icons/fa";

// Function to load all projects
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "/src/pages/EconsPosts/");
  const filenames = fs.readdirSync(postsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Untitled Project",
      description: data.description || "No description available.",

      markdown: content || "",
      tags: data.tags || [""],
    };
  });

  return {
    props: {
      projects,
    },
  };
}

export default function CSProjects({ projects = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsPerPage = 9;
  const startIndex = (currentPage - 1) * projectsPerPage;
  const selectedProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handleExpand = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {selectedProjects.map((project, index) => (
              <div key={index} className={styles.card}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <button
                    onClick={() => handleExpand(project)}
                    className={styles.expandButton}
                  >
                    Expand
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={startIndex + projectsPerPage >= projects.length}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
        {isModalOpen && selectedProject && (
          <Modal onClose={closeModal}>
            <h2>{selectedProject.title}</h2>

            <ReactMarkdown>{selectedProject.markdown}</ReactMarkdown>
          </Modal>
        )}
      </main>
      <Footer />
    </div>
  );
}
