import React, { useState, useEffect } from 'react';
import PropertyCard from '../component/PropertyCard';
import './FindHostel.css';

const FindHostelPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from backend and update the state
    // For simplicity, let's assume we have a properties array with sample data
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties'); // Replace with your API endpoint
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.log('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="find-hostel-page">
      <div className="page-header">
        <h2>Find Your New Home</h2>
        <p>Discover a variety of hostels in your preferred area</p>
      </div>
      <div className="property-listings">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            area={property.area}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FindHostelPage;
