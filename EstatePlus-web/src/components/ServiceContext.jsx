import { ServiceContext } from "./components/ServiceContext";

import React, { createContext, useState } from "react";

// Create Context
export const ServiceContext = createContext();

// Create Provider Component
export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const editService = (index, updatedService) => {
    setServices((prevServices) =>
      prevServices.map((service, i) => (i === index ? updatedService : service))
    );
  };

  const deleteService = (index) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  return (
    <ServiceContext.Provider value={{ services, addService, editService, deleteService }}>
      {children}
    </ServiceContext.Provider>
  );
};
