import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      {/* Buttons */}
      <ButtonSection>
      <Button to="/property-owner-register">Become a Property Owner</Button>
<Button to="/service-provider-register">Become a Service Provider</Button>

      </ButtonSection>

      {/* Contact Information */}
      <ContactInfo>
        <div>📞 0911223456</div>
        <div>📧 estateplus@gmail.com</div>
        <div>📍 123/B, Galle, Sri Lanka</div>
        <div>🌐 Follow us on:</div>
        <div>🔗 <a href="https://facebook.com/estateplus" target="_blank">Facebook</a></div>
        <div>🔗 <a href="https://instagram.com/estateplus" target="_blank">Instagram</a></div>
      </ContactInfo>

      {/* Copyright */}
      <Copyright>
        © {new Date().getFullYear()} EstatePlus. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #e8f5e9;
  padding: 50px;
  text-align: center;
`;

const ContactInfo = styled.div`
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  padding: 60px;
  display: flex;
  flex-direction: column;
`;

const ButtonSection = styled.div`
  display: flex;
  padding: 60px;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
  background-color: #dcedc8;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  background-color: #dcedc8;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #aed581;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

export default Footer;
