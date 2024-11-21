// //import React from 'react';
// import '../../styles/logementCard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { useParams, Navigate } from 'react-router-dom';
// import data from './../../data/logements.json';
// import Slideshow from '../../components/Slideshow';
// import Collaps from '../../components/Collaps';

// const LogementDetails = () => {
//   const { id } = useParams();  // get ID from URL

//   // objet par ID
//   const logement = data.find(logement => logement.id === id);

//   if (!logement) {
//     return <Navigate to="../404" />; 
//   }

//   const collapsData = [
//     {
//       title: "Description",
//       content: logement.description
//     },
//     {
//       title: "Équipements",
//       content: logement.equipments
//     }
//   ];

//   return (
//     <div className="logement-details">
//       <Slideshow pictures={logement.pictures} />
//       <div className='card-title'>
//         <div className='logement-titre'>
//           <h1>{logement.title}</h1>
//           <p>{logement.location}</p>
//           <div className="logement-tags">
//             {logement.tags.map((tags, index) => (
//               <span key={index} className="tags">
//                 {tags}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className='host-rating'>
//           <div className='logement-host'>
//             <h3>{logement.host.name}</h3>
//             <img src={logement.host.picture} alt={logement.host.name} />
//           </div>
//           <div className="logement-rating">
//             {Array.from({ length: logement.rating }).map((_, index) => (
//               <span key={index} className="star">
//                 {/* <FontAwesomeIcon key={index} icon={faStar} className="star" /> */}
//                 <FontAwesomeIcon icon={faStar} />
//               </span>
//             ))}
//             {Array.from({length: 5-  logement.rating }).map((_, index) => (
//               <span key={index} className="star-gris">
//                 <FontAwesomeIcon icon={faStar} />
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="logement-collaps">
//         {collapsData.map((item, index) => (
//           <Collaps key={index} title={item.title} content={item.content} />
//         ))}
//       </div>
//     </div>
//   );
// };


// export default ProjetDetails;