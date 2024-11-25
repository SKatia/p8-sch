//import logo from '../../assets/logo.png'
import './header.scss' 
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="main-container">
      <header>
        <nav >
          {/* <img className="logo" src={logo} alt="logo" /> */}
          <div className='logo'>
            <span>Ekaterina Schaeverbeke</span>
            <span id='textDev'>développeur web</span>
          </div> 
          <div className="menu">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/apropos">A propos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header