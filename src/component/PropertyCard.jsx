import React from 'react';
import './PropertyCard.css';
import { Link } from 'react-router-dom';

const PropertyCard = ({ image, title, area, price }) => {
    const handleCardClick = () => {
        // Perform any necessary actions when the card is clicked
      };

  return (
    <div className="property-card" onClick={handleCardClick}>
        <Link to={`/property/${property.id}`} className="card-link">
      <img src={image} alt={title} className="property-image" />
      <div className="property-details">
        <h3 className="property-title">{title}</h3>
        <p className="property-area">Area: {area}</p>
        <p className="property-price">Price: {price}</p>
      </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
