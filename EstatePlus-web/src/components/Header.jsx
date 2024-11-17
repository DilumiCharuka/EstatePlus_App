import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <Nav>
      <Logo src="/assets/logo.png" alt="EstatePlus Logo" />
      <NavMenu>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/services">Services</Link>
        <Link to="/auth">Login</Link>
      </NavMenu>
      <SearchContainer>
        <SearchInput placeholder="Search..." />
        <FaSearch />
        <FaUser onClick={toggleDropdown} />
        {showDropdown && (
          <Dropdown>
            <Link to="/auth">Login</Link>
          </Dropdown>
        )}
      </SearchContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #eaf4e8;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
      color: #007bff;
    }
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
    padding: 5px 0;

    &:hover {
      color: #007bff;
    }
  }
`;

export default Header;