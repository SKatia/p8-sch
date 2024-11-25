import React from 'react';
//import { Link } from 'react-router-dom';
//import logements from './../../data/logements.json';
//import '../../styles/home.scss'
import './apropos.scss'

const Apropos = () => {
  return (
    <div className="apropos">
      {/* <div > */}
        <h2> Mes compétences </h2>
        <div className="competences">
          <div className='front'>
            <h3>Front-end</h3>
            <p>HTML</p>
            <p>CSS (SASS)</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Développement d’interfaces responsives</p>
            {/* <p>Optimisation des performances (Lighthouse)</p> */}
          </div>
          <div className='back'>
            <h3>Back-end</h3>
            <p>NodeJS, Express</p>
            <p>MongoDB, MySQL </p>
            <p>API REST</p>
            <p>JSON Web Tokens</p>
            {/* <p>Mécanismes d’authentification (JWT)</p> */}
          </div>
          <div className='data'>
            <h3>Analyse de données</h3>
            {/* <p>Collect, modélisation, prédiction, visualisations de données</p> */}
            <p>Python</p>
            <p>librairies Numpy, Pandas</p>
            <p>Power BI</p>
            <p></p>
          </div>
        </div>
        <div className='outils'>
            <h3>Outils</h3>
            <p>Lighthouse</p>
            <p>Chrome DevTools</p>
            <p>Git et GitHub</p>
            <p>Visual Studio</p>
            <p>Jupyter Notebook</p>
          </div>
        {/* <p>SEO</p> */}
      {/* </div> */}
      {/* <div classname="formations">
        <h2> Formations </h2>
        <img src={"\assets\OpCllogo.jfif"} alt={"logo formation"} className="logo-formation" />
        <p>2024 Développeur WEB, OpenClassrooms</p>
        <img src={"\assets\OpCllogo.jfif"} alt={"logo formation"} className="logo-formation" />
        <p>2022 Data analyst, OpenClassrooms </p>
        <img src={"\assets\polytech_logo.png"} alt={"logo university"} className="logo-formation" />
        <p>Ingénieur en informatique, Université Polytechnique Nationale</p>
      </div> */}
    </div>
  );
};

export default Apropos;
