// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import PhotoGrid from './PhotoGrid.js';
import ServiceDescription from './ServiceDescription.js';
import Procedure from './Procedure.js';

const Home = () => (
  <main>
    <section className="hero">
      <p>Capturing moments from today… Creating memories for a lifetime.</p>
    </section>
        
    <PhotoGrid/>
    <ServiceDescription/>
    <Procedure/>
  </main>
  
);

export default Home;
