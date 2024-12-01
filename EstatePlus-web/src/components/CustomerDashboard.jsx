// CustomerDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleViewProperties = () => {
    navigate('/PropertyPage'); // Navigate to Property Page
  };

  const handleViewServices = () => {
    navigate('/ServicePage'); // Navigate to Service Page
  };

  return (
    <Container>
      <h2>Welcome to Customer Dashboard</h2>
      <Button onClick={handleViewProperties}>View Properties</Button>
      <Button onClick={handleViewServices}>View Services</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
   background-image: url('/assets/cust4.jpg');
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  gap: 20px;
  padding: 50px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background-color: #006a4e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1e4d2b;
  }
`;

export default CustomerDashboard;
