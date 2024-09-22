// src/components/ServiceDescription.js
import React from 'react';
import '../styles/ServiceDescription.css';

const ServiceDescription = () => {
  return (
    <div className="service-description">
      <h2>Our Packages</h2>
      
      <div className="service-package">
        <h3>Basic:</h3>
        <ul>
          <li>3 photos of your choice</li>
          <li>1 location</li>
          <li>Delivery of images: Max. 21 days</li>
        </ul>
      </div>

      <div className="service-package">
        <h3>Standard:</h3>
        <ul>
          <li>5 photos of your choice</li>
          <li>2 locations</li>
          <li>Delivery of images: Max. 14 days</li>
          <li>Outfit consultation</li>
          <li>Introduction to simple and natural posing</li>
        </ul>
      </div>

      <div className="service-package">
        <h3>Premium:</h3>
        <ul>
          <li>10 photos of your choice</li>
          <li>Unlimited locations</li>
          <li>Delivery of images: Max. 5 days</li>
          <li>Outfit consultation</li>
          <li>Introduction to simple and natural posing</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceDescription;
