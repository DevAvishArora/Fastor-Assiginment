// AppRoutes.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import OTP from './pages/OTP/OTP';
import Home from './pages/HomePage/Home';
import RestaurentDetail from './pages/RestaurentDetail/RestaurentDetail';

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/otp"
          element={<OTP isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/home"
          element={
            <Home /> 
          }
        />
        <Route path="/restaurant-details" element={<RestaurentDetail />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
