import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;

  h1 {
    font-size: 3rem;
    color: #343a40;
  }

  p {
    margin: 10px 0;
    color: #6c757d;
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default NotFound;
