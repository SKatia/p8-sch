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
        <div className='group-competences'>
          <h3>Front-end</h3>
          <p><i className="fa-brands fa-html5"></i> HTML</p>
          <p><i className="fa-brands fa-css"></i> CSS
            (<i className="fa-brands fa-sass"></i> SASS)
          </p>
          <p><i className="fa-brands fa-js"></i> JavaScript</p>
          <p><i className="fa-brands fa-react"></i> React</p>
          <p>Développement d’interfaces responsives</p>
          {/* <p>Optimisation des performances (Lighthouse)</p> */}
        </div>
        <div className='group-competences'>
          <h3>Back-end</h3>
          <p><i className="fa-brands fa-node-js"></i> NodeJS, Express</p>
          <p><i className="fa-solid fa-database"></i> MongoDB, MySQL </p>
          <p>API REST</p>
          <p>JSON Web Tokens</p>
          {/* <p>Mécanismes d’authentification (JWT)</p> */}
        </div>
        <div className='group-competences'>
          <h3>Analyse de données</h3>
          {/* <p>Collect, modélisation, prédiction, visualisations de données</p> */}
          <p><i className="fa-brands fa-python"></i> Python</p>
          <p>librairies Numpy, Pandas</p>
          <p>Power BI</p>
          <p></p>
        </div>
      </div>
      <h3 className='titre-outils'>Outils</h3>
      <div className='outils'>
        <p>Lighthouse</p>
        <p><i className="fa-brands fa-chrome"></i> Chrome DevTools</p>
        <p><i className="fa-brands fa-github"></i> Git et GitHub</p>
        <p>Visual Studio Code</p>
        <p>Jupyter Notebook</p>
      </div>
      {/* <p>SEO</p> */}
      {/* </div> */}
      <div className="formations">
        <h2> Formations </h2>
        <div class="formation-container">
          <div class="formation-row">
            <div className='formation-et-logo-2024'>
              <img src={`${process.env.PUBLIC_URL}/assets/OpCllogo.jpeg`} alt={"logo formation"} className="logo-formation" />
              {/* <img src={`${process.env.PUBLIC_URL}/assets/image.png`} alt="example" /> */}
              <span> Développeur WEB, OpenClassrooms 2024</span>
            </div>
            {/* <span class="year">2024</span> */}
            <p></p>
          </div>
          <div class="formation-row">
            {/* <span class="year">2022</span> */}
            <p></p>
            <div className='formation-et-logo-2022'>
              <span> 2022 Data analyst, OpenClassrooms </span>
              <img src={`${process.env.PUBLIC_URL}/assets/OpCllogo.jpeg`} alt={"logo formation"} className="logo-formation" />
            </div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/polytech_logo.png`} alt={"logo university"} className="logo-univer" />
        <span> Ingénieur en informatique, Université Polytechnique Nationale</span>
      </div>
    </div>
  );
};

export default Apropos;
