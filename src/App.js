// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Header.css';
import './styles/Navigation.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Portfolio.css';
import './styles/Contact.css';
import './styles/Footer.css';
import './styles/PhotoGrid.css';
import PhotoGrid from './components/PhotoGrid';

const App = () => (
  <Router>
    <div>
      <Header />
      {/* <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
    <div>
      <PhotoGrid/>
    </div>
    <div>
      <Footer />
    </div>
  </Router>
);

export default App;
