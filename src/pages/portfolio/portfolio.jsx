import React from 'react';
import { Link } from 'react-router-dom';
import projets from './../../data/projets.json';
import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* <h2> Portfolio </h2> */}
      <div className="projets-grid">
        {projets.map(projet => (
         // <Link to={`/logement/${logement.id}`} key={logement.id} className="logement-card-link">
            <div className="projet-card">
              <img src={projet.cover} alt={projet.title} className="projet-image" />
              {/* <div className="projet-overlay">
                <p>{projet.description}</p>
              </div> */}
            </div>
          //</Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
