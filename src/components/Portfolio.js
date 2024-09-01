// src/components/Portfolio.js
import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => (
  <section className="portfolio">
    <div className="gallery">
      {/* Example of portfolio items */}
      <div className="gallery-item"><img src="path/to/photo1.jpg" alt="Photo 1" /></div>
      <div className="gallery-item"><img src="path/to/photo2.jpg" alt="Photo 2" /></div>
      {/* Add more photos as needed */}
    </div>
  </section>
);

export default Portfolio;
