// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PresentationScreen from './components/PresentationScreen';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const App = () => {
  const [isPresentationVisible, setPresentationVisible] = useState(true);

  return (
    <div className="App">
      <Router>          
            <Header />
            <div className="router-wrapper">
              <Routes>  
                {/* <Route path="/home" element={<PresentationScreen />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pricing" element={<Pricing />} />

              </Routes>
            </div>
      </Router>
            <Footer />
          
        
    </div>
  );
};

export default App;
