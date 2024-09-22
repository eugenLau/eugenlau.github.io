import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css'; // Import the CSS file for styling

// Dynamically import all images from the assets/images directory
const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`portfolio-container ${isVisible ? 'fade-in' : ''}`}>
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item">
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
