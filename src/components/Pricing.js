// src/components/Pricing.js
import React from 'react';
import '../styles/Pricing.css';
import PricingCard from './PricingCard';

import basicImage from '../assets/images/DSC07920.jpg'; 
import standardImage from '../assets/images/DSC09391.jpg';
import premiumImage from '../assets/images/DSC02790.jpg';

const Pricing = () => {
  return (
    <section className="pricing">
      <PricingCard
        image={basicImage}
        title="Basic Photo Session"
        price="125 €"
        features={[
          '3 photos of your choice',
          '1 location',
          'Delivery: 21 days'
        ]}
        direction="left"
      />

      <PricingCard
        image={standardImage}
        title="Standard Photo Session"
        price="150 €"
        features={[
          '5 photos of your choice',
          '2 locations',
          'Delivery: 14 days',
          'Bonus: Outfit consultation',
          'Bonus: Introduction to simple and natural posing'
        ]}
        direction="right"
      />

      <PricingCard
        image={premiumImage}
        title="Premium Photo Session"
        price="250 €"
        features={[
          '10 photos of your choice',
          'Unlimited locations',
          'Delivery: 5 days',
          'Bonus: Outfit consultation',
          'Bonus: Introduction to simple and natural posing'
        ]}
        direction="left"
      />
    </section>
  );
};

export default Pricing;
