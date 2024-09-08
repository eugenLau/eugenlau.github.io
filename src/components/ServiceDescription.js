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
          <li>Delivery of images: Max. 14 days</li>
          <li>Photos available for download in digital form</li>
          <li>Editing: Contrast and color correction</li>
        </ul>
      </div>

      <div className="service-package">
        <h3>Standard:</h3>
        <ul>
          <li>5 photos of your choice</li>
          <li>Location change possible</li>
          <li>Introduction to simple and natural posing</li>
          <li>Outfit consultation</li>
          <li>Delivery of images: Max. 7 days</li>
          <li>Photos available for download in digital form</li>
          <li>Editing: Contrast and color correction</li>
        </ul>
      </div>

      <div className="service-package">
        <h3>Premium:</h3>
        <ul>
          <li>10 photos of your choice</li>
          <li>Location change possible</li>
          <li>Delivery of images: Max. 3 days</li>
          <li>Introduction to simple and natural posing</li>
          <li>Outfit consultation</li>
          <li>Photos available for download in digital form</li>
          <li>Editing: Contrast and color correction</li>
        </ul>
      </div>

      <div className="additional-services">
        <h3>Additional Services (included):</h3>
        <ul>
          <li>Outfit change possible</li>
          <li>Introduction to simple and natural posing</li>
          <li>Outfit consultation</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceDescription;
