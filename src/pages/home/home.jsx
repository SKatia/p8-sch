import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import logements from './../../data/logements.json';
import './home.scss'
//import { ReactTyped } from 'react-typed';

const Home = () => {

  return (
    <div className="home">
      {/* <div className="fullscreen-image"></div>; */}
      <div className='banner'>
        <h1> Ekaterina Schaeverbeke </h1>
        {/* <ReactTyped
          className="typing"
          strings={[
            'Web-developpeur',
            'Créatrice de solutions numériques',
            'Développeuse passionnée',
          ]}
          typeSpeed={50} // Скорость печатания
          backSpeed={30} // Скорость удаления текста
          backDelay={2000} // Задержка перед удалением
          loop // Бесконечный цикл
        /> */}
        {/* <p className="typing">{displayText}</p> */}
        <p>Web-développeur</p>
        {/* <Link to="/contact" className="banner__button">
          Contactez-moi
        </Link> */}
        <div className='presentation'>
          <p>Je suis développeur web passionnée par la création d’applications modernes et performantes.
            Mon parcours combine une solide formation académique, une riche expérience professionnelle et un désir constant d’apprendre et
            de m’adapter aux nouvelles technologies.</p>
          <p>Je cherche à allier mon expérience en développement logiciel et mes compétences récentes en développement web
            pour contribuer à des projets innovants. Que ce soit pour construire une application dynamique,
            optimiser un site existant ou analyser des données, je suis prête à relever tous les défis !</p>
          <p> En savoir plus sur mes projets ? Consultez mon <Link to="/portfolio" className="link_portfolio">portfolio </Link>  
          ou connectez-vous avec moi sur</p>
        </div>
        <a
          href="https://www.linkedin.com/in/ekaterina-schaeverbeke-7ab47a21b/"
          className="banner__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Home;
