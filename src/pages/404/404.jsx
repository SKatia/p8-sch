import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss'


function Error() {
  return (
      <div className='page404'>
          <div className="text404">404</div>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">
          {/* Retourner à la page d'accueil */}
          <i className="fa-solid fa-house-chimney"></i>
          </Link>
          </div>
  )
}

export default Error;
