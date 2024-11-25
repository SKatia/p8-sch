import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './pages/home/home'
import APropos from './pages/apropos/apropos'
import Portfolio from './pages/portfolio/portfolio'
import Contact from './pages/contact/contact'
import Error from './pages/404/404'
import Header from './components/Header/header'
// import Footer from './components/Footer'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const basename = process.env.NODE_ENV === "production" ? "/p8-sch" : "/";

root.render(

  <React.StrictMode>
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode> //,
)