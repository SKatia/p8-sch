import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './pages/home'
// import APropos from './pages/apropos'
//import LogementDetails from './pages/LogementDetails';
//import Error from './pages/404'
import Header from './components/Header'
// import Footer from './components/Footer'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apropos" element={<APropos />} /> */}
        {/* <Route path="/logement/:id" element={<LogementDetails />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode> //,
)