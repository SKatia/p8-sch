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
        <Link to="/contact" className="banner__button">
          Contactez-moi
        </Link>
      </div>
    </div>
  );
};

export default Home;
