import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import propertyImage from '/assets/property-image.jpeg'; // Adjust path as needed

const PropertySection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBuyNowClick = () => {
    navigate('/auth'); // Redirect to the Login/Register page
  };

  return (
    <PropertyWrapper>
      <PropertyInfo>
        <h2>Discover Your Perfect Property</h2>
        <p>
          Browse through our listings of houses, apartments, and lands. Whether you're buying your first home or expanding your property portfolio, we have the perfect options for you.
        </p>
        <button onClick={handleBuyNowClick} aria-label="Buy Now">
          Buy Now
        </button>
      </PropertyInfo>
      <PropertyImage src={propertyImage} alt="Beautiful property" />
    </PropertyWrapper>
  );
};

const PropertyWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background-color: #e9ffdb; /* Light green shade */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PropertyInfo = styled.div`
  max-width: 500px;

  h2 {
    font-size: 2.5rem;
    color: #006a4e /* Orange shade */
    margin-bottom: 30px;
  }

  p {
    font-size: 1rem;
    color: #424242; /* Dark gray */
    margin-bottom: 30px;
    line-height: 1.5;
  }

  button {
    background-color: #006a4e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1e4d2b; /* Darker orange on hover */
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const PropertyImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default PropertySection;
