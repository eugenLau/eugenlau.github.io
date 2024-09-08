// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PresentationScreen from './components/PresentationScreen';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  const [isPresentationVisible, setPresentationVisible] = useState(true);

  return (
    <div className="App">
      <Router>
        {isPresentationVisible ? (
          <PresentationScreen onProceed={() => setPresentationVisible(false)} />
        ) : (
          <>
            <Header />
            <div className="router-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
