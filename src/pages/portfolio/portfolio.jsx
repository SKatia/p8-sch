import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import Modal from "react-modal";
import projets from './../../data/projets.json';
import './portfolio.scss'

Modal.setAppElement("#root"); // Accessibility setting for react-modal

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      {/* <h2> Portfolio </h2> */}
      <div className="projets-grid">
        {projets.map(projet => (
          //<Link to={`/projet/${projet.id}`} key={projet.id} className="projet-card-link">
            //<div className="projet-card">
            <div
            key={projet.id}
            className="projet-card"
            onClick={() => openModal(projet)}
            >
            <img 
              src={`${process.env.PUBLIC_URL}${projet.cover}`} 
              alt={projet.title} 
              className="projet-image" 
            />
              <div className="projet-overlay">
                <p>{projet.title}</p>
              </div>
            </div>
          //</Link>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <img
              src={`${process.env.PUBLIC_URL}${selectedProject.cover}`} 
              // src={`%PUBLIC_URL%{selectedProject.cover}`} 
              alt={selectedProject.title}
              className="modal-image"
            />
            <p>{selectedProject.description}</p>
            <h3>Technologies utilisées:</h3>
            <ul>
              {selectedProject.competences.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <a
              href={selectedProject.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="fa-brands fa-github"></i> View on GitHub
            </a>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default Portfolio;
