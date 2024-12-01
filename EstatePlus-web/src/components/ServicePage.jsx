import React, { useState } from 'react';
import styled from 'styled-components';

const ServicePage = () => {
  const services = [
    {
      id: 1,
      name: 'Plumbing Service',
      category: 'Plumbing',
      provider: 'John Doe',
      price: 'Rs. 3,000',
      contact: '0911234567',
      image: '/assets/service-image.jpg',
    },
    {
      id: 2,
      name: 'Construction Service',
      category: 'Construction',
      provider: 'Build Pro',
      price: 'Rs. 50,000',
      contact: '0911234567',
      image: '/assets/construction.jpg',
    },
    {
      id: 3,
      name: 'Repair Service',
      category: 'Repair',
      provider: 'FixIt Ltd.',
      price: 'Rs. 5,000',
      contact: '0911234567',
      image: '/assets/repair.jpg',
    },
    {
      id: 4,
      name: 'Plumbing Service',
      category: 'Plumbing',
      provider: 'Sam',
      price: 'Rs. 3,500',
      contact: '0911234567',
      image: '/assets/plumbing2.jpg',
    },
    {
      id: 5,
      name: 'Electrical Service',
      category: 'Electrical',
      provider: 'PowerFix',
      price: 'Rs. 7,000',
      contact: '0911234567',
      image: '/assets/electrical.jpg',
    },
    {
      id: 6,
      name: 'Construction Service',
      category: 'Construction',
      provider: 'BuildTech',
      price: 'Rs. 60,000',
      contact: '0911234567',
      image: '/assets/construction2.jpg',
    },
  ];

  const categories = ['All', 'Plumbing', 'Construction', 'Repair', 'Electrical'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);

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
        <h2>{selectedCategory} Services</h2>
        <ServiceList>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceImage src={service.image} alt={service.name} />
              <h4>{service.name}</h4>
              <p>Provider: {service.provider}</p>
              <p>Price: {service.price}</p>
              <p>Contact: {service.contact}</p>
            </ServiceCard>
          ))}
        </ServiceList>
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

const ServiceList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export default ServicePage;
