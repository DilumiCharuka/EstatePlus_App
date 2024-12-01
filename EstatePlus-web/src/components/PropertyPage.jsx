import React, { useState } from 'react';
import styled from 'styled-components';

const PropertyPage = () => {
  const properties = [
    {
      id: 1,
      name: 'Luxury Villa',
      type: 'Villas',
      location: 'Colombo',
      price: 'Rs. 10,000,000',
      contact: '0911234567',
      image: '/assets/cust3.jpg', // Example image path
    },
    {
      id: 2,
      name: 'Modern Apartment',
      type: 'Apartments',
      location: 'Galle',
      price: 'Rs. 5,000,000',
      contact: '0911234567',
      image: '/assets/apartment1.jpg',
    },
    {
      id: 3,
      name: 'Spacious Home',
      type: 'Homes',
      location: 'Kandy',
      price: 'Rs. 15,000,000',
      contact: '0911234567',
      image: '/assets/home1.jpg',
    },
    {
      id: 4,
      name: 'Prime Land',
      type: 'Lands',
      location: 'Matara',
      price: 'Rs. 45,000,000',
      contact: '0911234567',
      image: '/assets/land1.jpg',
    },
    {
      id: 5,
      name: 'Beachfront Villa',
      type: 'Villas',
      location: 'Kandy',
      price: 'Rs. 25,000,000',
      contact: '0911234567',
      image: '/assets/villa2.jpg',
    },
    {
      id: 6,
      name: 'City Apartment',
      type: 'Apartments',
      location: 'Colombo',
      price: 'Rs. 8,000,000',
      contact: '0911234567',
      image: '/assets/apartment2.jpg',
    },
  ];

  const categories = ['All', 'Apartments', 'Homes', 'Lands', 'Villas'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredProperties =
    selectedCategory === 'All'
      ? properties
      : properties.filter((property) => property.type === selectedCategory);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen}>
        <ToggleSidebarButton onClick={toggleSidebar}>
          {isSidebarOpen ? '⮜' : '⮞'}
        </ToggleSidebarButton>
        {isSidebarOpen && (
          <NavList>
            <h3>Categories</h3>
            {categories.map((category) => (
              <NavItem
                key={category}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </NavItem>
            ))}
          </NavList>
        )}
      </Sidebar>
      <Content>
        <h2>{selectedCategory} Properties</h2>
        <PropertyList>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id}>
              <ImageWrapper>
                <img src={property.image} alt={property.name} />
              </ImageWrapper>
              <CardBody>
                <h4>{property.name}</h4>
                <p>Location: {property.location}</p>
                <p>Price: {property.price}</p>
                <p>Contact: {property.contact}</p>
              </CardBody>
            </PropertyCard>
          ))}
        </PropertyList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('/assets/cust4.jpg');
  background-size: cover;
  background-position: center;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? '250px' : '50px')};
  background: #f8f9fa;
  padding: ${(props) => (props.isOpen ? '20px' : '10px')};
  transition: width 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ToggleSidebarButton = styled.button`
  position: absolute;
  top: 10px;
  right: -15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #0056b3;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  h3 {
    margin-bottom: 20px;
    color: #007bff;
  }
`;

const NavItem = styled.li`
  padding: 10px 15px;
  margin: 10px 0;
  background: ${(props) => (props.isActive ? '#007bff' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${(props) => (props.isActive ? '#0056b3' : '#e9f3ff')};
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }
`;

const PropertyList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PropertyCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 15px;

  h4 {
    margin-bottom: 10px;
    color: #007bff;
  }

  p {
    margin: 5px 0;
    color: #333;
  }
`;

export default PropertyPage;
