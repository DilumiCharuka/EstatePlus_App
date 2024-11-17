// src/components/AboutUs.jsx
import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Section>
      <h2>About Us</h2>
      <p>
        At EstatePlus, we simplify the real estate experience by connecting property owners, buyers, renters, and trusted
        service providers in one convenient platform. Our mission is to help you find your dream home or office space while
        ensuring you have access to reliable services for construction, repairs, and property management.
      </p>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px;
  text-align: center;
  background-color: #ccd3db;

  p {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default AboutUs;