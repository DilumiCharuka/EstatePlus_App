import React from 'react';
import styled from 'styled-components';

const ServiceProviderDashboard = () => {
  return (
    <DashboardWrapper>
      <Header>
        <h2>Welcome, Service Provider</h2>
        <p>Manage your services and view assigned tasks.</p>
      </Header>
      <ButtonSection>
        <button>Add New Service</button>
        <button>View Assigned Tasks</button>
      </ButtonSection>
      <ServiceList>
        <h3>Your Services</h3>
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plumbing</td>
              <td>Repairs</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Interior Design</td>
              <td>Planning</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </ServiceList>
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

const ServiceList = styled.div`
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

export default ServiceProviderDashboard;
