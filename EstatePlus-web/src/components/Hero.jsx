import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Welcome to EstatePlus</h1>
        <p>Your one-stop solution for all your real estate and service needs!</p>
      </HeroText>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url('/assets/hero-bg.jpeg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const HeroText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;

export default Hero;