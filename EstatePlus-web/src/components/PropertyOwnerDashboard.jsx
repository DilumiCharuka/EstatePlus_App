import React, { useState } from 'react';
import styled from 'styled-components';


const PropertyOwnerDashboard = () => {
  const [properties, setProperties] = useState({
    Apartments: [],
    Homes: [],
    Lands: [],
    Villas: [],
  });
  const [newProperty, setNewProperty] = useState({
    category: 'Apartments',
    name: '',
    location: '',
    price: '',
    contact: '',
    photo: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewProperty((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleAddProperty = () => {
    const { category, name, location, price, contact, photo } = newProperty;

    if (name && location && price && contact) {
      const newEntry = { name, location, price, contact, photo };
      setProperties((prev) => ({
        ...prev,
        [category]: [...prev[category], newEntry],
      }));

      resetForm();
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleEditProperty = (category, index) => {
    const propertyToEdit = properties[category][index];
    setNewProperty({
      category,
      name: propertyToEdit.name,
      location: propertyToEdit.location,
      price: propertyToEdit.price,
      contact: propertyToEdit.contact,
      photo: propertyToEdit.photo,
    });
    setIsEditing(true);
    setEditingIndex({ category, index });
  };

  const handleSaveUpdate = () => {
    const { category, name, location, price, contact, photo } = newProperty;

    if (name && location && price && contact) {
      setProperties((prev) => ({
        ...prev,
        [category]: prev[category].map((item, index) =>
          index === editingIndex.index
            ? { name, location, price, contact, photo }
            : item
        ),
      }));

      resetForm();
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleDeleteProperty = (category, index) => {
    setProperties((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  };

  const resetForm = () => {
    setNewProperty({
      category: 'Apartments',
      name: '',
      location: '',
      price: '',
      contact: '',
      photo: null,
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  return (
    <DashboardWrapper>
      <Header>
        <h2>Welcome, Property Owner</h2>
        <p>Manage your properties and add new ones seamlessly.</p>
      </Header>

      <FormSection>
        <h3>{isEditing ? 'Edit Property' : 'Add New Property'}</h3>
        <form>
          <label>
            Category:
            <select
              name="category"
              value={newProperty.category}
              onChange={handleInputChange}
              disabled={isEditing} // Disable category change when editing
            >
              {Object.keys(properties).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Property Name:
            <input
              type="text"
              name="name"
              value={newProperty.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={newProperty.location}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={newProperty.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={newProperty.contact}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Photo:
            <input type="file" onChange={handleFileChange} />
          </label>
          <button
            type="button"
            onClick={isEditing ? handleSaveUpdate : handleAddProperty}
          >
            {isEditing ? 'Save Update' : 'Add Property'}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm}>
              Cancel Edit
            </button>
          )}
        </form>
      </FormSection>

      <PropertyList>
        <h3>Your Properties</h3>
        {Object.keys(properties).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <table>
              <thead>
                <tr>
                  <th>Property Name</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Contact</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties[category].map((property, index) => (
                  <tr key={index}>
                    <td>{property.name}</td>
                    <td>{property.location}</td>
                    <td>{property.price}</td>
                    <td>{property.contact}</td>
                    <td>
                      {property.photo ? (
                        <img
                          src={URL.createObjectURL(property.photo)}
                          alt={property.name}
                          style={{ width: '50px', height: '50px' }}
                        />
                      ) : (
                        'No Photo'
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleEditProperty(category, index)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProperty(category, index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </PropertyList>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #a6d8c2
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
      background-color: #2c3e50;
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

const PropertyList = styled.div`
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
      background-color: #2c3e50;
      color: white;
    }
  }
`;

export default PropertyOwnerDashboard;
