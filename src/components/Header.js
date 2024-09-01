// src/components/Header.js
import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import '../styles/Header.css';

const Header = () => (
  <header class='c-header'>
    <div class="header-container">
    <h1>Eugen Laubhan</h1>
    <Navigation />
    </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </header>
);

export default Header;
