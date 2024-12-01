import React, { useState } from 'react';
import styled from 'styled-components';


const ServiceProviderDashboard = () => {
  const [services, setServices] = useState({
    Plumbing: [],
    Construction: [],
    Repair: [],
    Electrical: [],
  });

  const [newService, setNewService] = useState({
    category: 'Plumbing',
    name: '',
    provider: '',
    price: '',
    contact: '',
    photo: null,
  });

  const [isEditing, setIsEditing] = useState(false); // Tracks if we are editing
  const [editCategory, setEditCategory] = useState(''); // Stores the category of the service being edited
  const [editIndex, setEditIndex] = useState(null); // Stores the index of the service being edited

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewService((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  // Add a new service or update an existing one
  const handleAddOrUpdateService = () => {
    const { category, name, provider, price, contact, photo } = newService;

    if (name && provider && price && contact) {
      if (isEditing) {
        // Update the existing service
        const updatedServices = { ...services };
        updatedServices[editCategory][editIndex] = { name, provider, price, contact, photo };
        setServices(updatedServices);
        setIsEditing(false); // Exit editing mode
      } else {
        // Add a new service
        const newEntry = { name, provider, price, contact, photo };
        setServices((prev) => ({
          ...prev,
          [category]: [...prev[category], newEntry],
        }));
      }

      // Clear the form
      setNewService({
        category: 'Plumbing',
        name: '',
        provider: '',
        price: '',
        contact: '',
        photo: null,
      });
    } else {
      alert('Please fill out all fields!');
    }
  };

  // Delete a service
  const handleDeleteService = (category, index) => {
    setServices((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  };

  // Edit a service
  const handleEditService = (category, index) => {
    const serviceToEdit = services[category][index];
    setNewService({
      category,
      name: serviceToEdit.name,
      provider: serviceToEdit.provider,
      price: serviceToEdit.price,
      contact: serviceToEdit.contact,
      photo: serviceToEdit.photo,
    });
    setIsEditing(true);
    setEditCategory(category);
    setEditIndex(index);
  };

  return (
    <DashboardWrapper>
      <Header>
        <h2>Welcome, Service Provider</h2>
        <p>Manage your services and view assigned tasks.</p>
      </Header>

      <FormSection>
        <h3>{isEditing ? 'Edit Service' : 'Add New Service'}</h3>
        <form>
          <label>
            Category:
            <select
              name="category"
              value={newService.category}
              onChange={handleInputChange}
              disabled={isEditing} // Disable category selection during editing
            >
              {Object.keys(services).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Service Name:
            <input
              type="text"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Provider:
            <input
              type="text"
              name="provider"
              value={newService.provider}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={newService.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={newService.contact}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Photo:
            <input type="file" onChange={handleFileChange} />
          </label>
          <button type="button" onClick={handleAddOrUpdateService}>
            {isEditing ? 'Update Service' : 'Add Service'}
          </button>
        </form>
      </FormSection>

      <ServiceList>
        <h3>Your Services</h3>
        {Object.keys(services).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <table>
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Provider</th>
                  <th>Price</th>
                  <th>Contact</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services[category].map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.provider}</td>
                    <td>{service.price}</td>
                    <td>{service.contact}</td>
                    <td>
                      {service.photo ? (
                        <img
                          src={URL.createObjectURL(service.photo)}
                          alt={service.name}
                          style={{ width: '50px', height: '50px' }}
                        />
                      ) : (
                        'No Photo'
                      )}
                    </td>
                    <td>
                      <button onClick={() => handleEditService(category, index)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteService(category, index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </ServiceList>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #e3f2fd
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

const FormSection = styled.div`
  margin-bottom: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 5px;
    }

    button {
      padding: 10px 15px;
      background-color: #47699f;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #34495e;
      }
    }
  }
`;

const ServiceList = styled.div`
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #47699f;
      color: white;
    }
  }
`;

export default ServiceProviderDashboard;
