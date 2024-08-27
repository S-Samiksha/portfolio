import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaGithub } from "react-icons/fa";
import Modal from "../components/Modal/Modal"; // Import the modal component
import styles from "../styles/Projects.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const projects = [
  {
    title: "Project 1",
    description: "A brief intro to Project 1.",
    githubLink: "https://github.com/project1",
    markdown: "# Full details of Project 1\n\nHere are all the details...",
  },
  {
    title: "Project 2",
    description: "A brief intro to Project 2.",
    githubLink: "https://github.com/project2",
    markdown: "# Full details of Project 2\n\nHere are all the details...",
  },
  {
    title: "Project 3",
    description: "A brief intro to Project 2.",
    githubLink: "https://github.com/project2",
    markdown: "# Full details of Project 2\n\nHere are all the details...",
  },
  {
    title: "Project 4",
    description: "A brief intro to Project 2.",
    githubLink: "https://github.com/project2",
    markdown: "# Full details of Project 2\n\nHere are all the details...",
  },
  {
    title: "Project 5",
    description: "A brief intro to Project 2.",
    githubLink: "https://github.com/project2",
    markdown: "# Full details of Project 2\n\nHere are all the details...",
  },
  {
    title: "Project 6",
    description: "A brief intro to Project 2.",
    githubLink: "https://github.com/project2",
    markdown: "# Full details of Project 2\n\nHere are all the details...",
  },
  {
    title: "Project 7",
    description: "A brief intro to Project 2.",
    githubLink: "https://github.com/project2",
    markdown: "# Full details of Project 2\n\nHere are all the details...",
  },
  // Add more projects here...
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsPerPage = 6;
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
                <div className={styles.actions}>
                  <a
                    href={project.githubLink}
                    className={styles.footerIcon}
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
            <p>{selectedProject.description}</p>
            <a
              href={selectedProject.githubLink}
              className={styles.footerIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub Link
            </a>
            <ReactMarkdown>{selectedProject.markdown}</ReactMarkdown>
          </Modal>
        )}
      </main>
      <Footer />
    </div>
  );
}
