// In PropertyOwnerDashboard.jsx
import React from 'react';
import styled from 'styled-components';

const PropertyOwnerDashboard = () => {
  return (
    <DashboardWrapper>
      <Header>
        <h2>Welcome, Property Owner</h2>
        <p>Manage your properties and add new ones seamlessly.</p>
      </Header>
      <ButtonSection>
        <button>Add New Property</button>
        <button>Manage Properties</button>
      </ButtonSection>
      <PropertyList>
        <h3>Your Properties</h3>
        <table>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beachside Villa</td>
              <td>Galle</td>
              <td>Listed</td>
            </tr>
            <tr>
              <td>Urban Apartment</td>
              <td>Colombo</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </PropertyList>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 20px;

  h2 {
    color: #2c3e50;
  }

  p {
    font-size: 1rem;
    color: #7f8c8d;
  }
`;

const ButtonSection = styled.div`
  margin-bottom: 20px;

  button {
    padding: 10px 15px;
    margin: 0 10px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #34495e;
    }
  }
`;

const PropertyList = styled.div`
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #2c3e50;
      color: white;
    }
  }
`;

export default PropertyOwnerDashboard;
