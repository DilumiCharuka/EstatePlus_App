import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedRole = queryParams.get('role');
    if (selectedRole) {
      setRole(selectedRole);
    }
  }, [location.search]);

  const handleLogin = () => {
    if (role === 'propertyOwner') {
      navigate('/property-owner-dashboard');
    } else if (role === 'serviceProvider') {
      navigate('/service-provider-dashboard');
    } else {
      alert('Please select a role to proceed!');
    }
  };

  return (
    <LoginWrapper>
      <h2>Login / Register</h2>
      <RoleSelector>
        <label>
          <input
            type="radio"
            name="role"
            value="propertyOwner"
            checked={role === 'propertyOwner'}
            onChange={(e) => setRole(e.target.value)}
          />
          Property Owner
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="serviceProvider"
            checked={role === 'serviceProvider'}
            onChange={(e) => setRole(e.target.value)}
          />
          Service Provider
        </label>
      </RoleSelector>
      <button onClick={handleLogin}>Continue</button>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const RoleSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  label {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default AuthPage;
