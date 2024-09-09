import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState, useEffect, useRef } from "react";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Projects.module.css";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

// Function to load all projects
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "/src/pages/CSPosts/");
  const filenames = fs.readdirSync(postsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Untitled Project",
      date: data.date || "No Date",
      description: data.description || "No description available.",
      githubLink: data.githubLink || "#",
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

  const cardRefs = useRef([]);

  const handleExpand = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Reset animations on page change
    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.remove(styles.visible);
      }
    });

    // Initial visibility check
    cardRefs.current.forEach((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add(styles.visible);
        }
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [currentPage]); // Run effect when currentPage changes

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container} key={currentPage}>
          <div className={styles.grid}>
            {selectedProjects.map((project, index) => (
              <div
                key={index}
                className={styles.card}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <h2>{project.title}</h2>
                <hr className={styles.divider} />
                
                <p>{project.description}</p>
                <p className={styles.dateText}> {project.date}</p>
                

                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <a
                    href={project.githubLink}
                    className={styles.githubIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

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
            <p>
              For full details:{" "}
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <hr className={styles.thickdivider} />
            </p>
            <ReactMarkdown>{selectedProject.markdown}</ReactMarkdown>
          </Modal>
        )}
      </main>
      <Footer />
    </div>
  );
}
