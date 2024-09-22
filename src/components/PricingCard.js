import React from 'react';
import '../styles/PricingCard.css';

const PricingCard = ({ image, title, price, features, direction }) => {
  const isRightAligned = direction === 'right'; // Determine alignment based on the passed prop
    console.log('direction :: ', direction);
    console.log('isRightAligned :: ', isRightAligned);
  return (
    <div className={`pricing-card ${isRightAligned ? 'right' : 'left'}`}>
      {/* {!isRightAligned && (
        <div className="pricing-card-image">
          <img src={image} alt={title} />
        </div>
      )} */}
        <div className="pricing-card-image">
          <img src={image} alt={title} />
        </div>
      <div className="pricing-card-content">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a href="/contact" className="book-now">Book Now</a>
      </div>
      {/* {isRightAligned && (
        <div className="pricing-card-image">
          <img src={image} alt={title} />
        </div>
      )} */}
    </div>
  );
};

export default PricingCard;
