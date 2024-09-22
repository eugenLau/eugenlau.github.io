import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import PhotoGrid from './PhotoGrid.js';
import ServiceDescription from './ServiceDescription.js';
import Procedure from './Procedure.js';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect when component mounts
    setIsVisible(true);
  }, []);

  return (
    <main className={`home ${isVisible ? 'fade-in' : ''}`}>
      <section className="hero">
        <p>Capturing moments from today… Creating memories for a lifetime.</p>
      </section>
        
      <PhotoGrid />
      <ServiceDescription />
      <Procedure />
    </main>
  );
};

export default Home;
