// import React from 'react';
// import { Link } from 'react-router-dom';
// //import logements from './../../data/logements.json';
// //import '../../styles/home.scss'

// const Contact = () => {
//   return (
//     <div className="contact">
//       <h2> Contact </h2>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import './contact.scss';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Contactez-moi</h1>
      <form className="contact-page__form">
        <div className="contact-page__field">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Votre nom" required />
        </div>

        <div className="contact-page__field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Votre email" required />
        </div>

        <div className="contact-page__field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>
        </div>

        <button type="submit" className="contact-page__button">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
