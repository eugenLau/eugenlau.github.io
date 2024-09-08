// src/components/Pricing.js
import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Photography Packages</h2>
      <div className="pricing-card">
        <h3>Standard Photo Session</h3>
        <p className="price">$250</p>
        <ul>
          <li>1-hour session</li>
          <li>1 location of your choice</li>
          <li>20 professionally edited photos</li>
          <li>High-resolution digital downloads</li>
          <li>Online gallery for easy sharing</li>
        </ul>
        <a href="/contact" className="book-now">Book Now</a>
      </div>
    </section>
  );
};

export default Pricing;
