// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './styles/Header.css';
import './styles/Pricing.css';
import './styles/Footer.css';
import './styles/PhotoGrid.css';

const App = () => (
  // return (
    <div className="App">
      <Router>
        <Header />
        <div className="router-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  // ); 
);

export default App;
