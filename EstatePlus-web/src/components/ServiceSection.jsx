import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import serviceImage from '/assets/service-image.jpg'; // Adjust path as needed

const ServiceSection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleHireNowClick = () => {
    navigate('/auth'); // Redirect to the Login/Register page
  };

  return (
    <ServiceWrapper>
      <ServiceInfo>
        <h2>Hire Professional Service Providers</h2>
        <p>
          Whether you need construction, repair, or planning services, find skilled and trusted professionals ready to meet your needs. Your satisfaction is our priority.
        </p>
        <button onClick={handleHireNowClick} aria-label="Hire Now">
          Hire Now
        </button>
      </ServiceInfo>
      <ServiceImage src={serviceImage} alt="Service provider at work" />
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background-color: #e3f2fd; /* Light blue shade */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ServiceInfo = styled.div`
  max-width: 500px;

  h2 {
    font-size: 2.5rem;
    color: #1e88e5; /* Blue shade */
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #424242; /* Dark gray */
    margin-bottom: 20px;
    line-height: 1.5;
  }

  button {
    background-color: #1e88e5;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1565c0; /* Darker blue on hover */
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

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default ServiceSection;
