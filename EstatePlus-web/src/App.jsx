import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import LoginRegister from './components/LoginRegister';
import PropertyOwnerDashboard from './components/PropertyOwnerDashboard';
import PropertySection from './components/PropertySection';
import ServiceProviderDashboard from './components/ServiceProviderDashboard';
import ServiceSection from './components/ServiceSection';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth" element={<LoginRegister />} /> {/* Login/Register */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<PropertySection />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route
            path="/property-owner-register"
            element={<AuthPage />}
          />
          <Route
            path="/Authpage"
            element={<PropertyOwnerDashboard />}
          />
          <Route
            path="/service-provider-register"
            element={<AuthPage />}
          />
          <Route
            path="/Authpage"
            element={<ServiceProviderDashboard />}
          />
          <Route path="/property-owner-dashboard" element={<PropertyOwnerDashboard />} />
<Route path="/service-provider-dashboard" element={<ServiceProviderDashboard />} />

          
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
