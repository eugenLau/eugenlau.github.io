// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import PhotoGrid from './PhotoGrid.js';

const Home = () => (
  <main>
    <section className="hero">
      <p>Capturing moments from today… Creating memories for a lifetime.</p>
    </section>
        
    <PhotoGrid/>
  </main>
  
);

export default Home;
