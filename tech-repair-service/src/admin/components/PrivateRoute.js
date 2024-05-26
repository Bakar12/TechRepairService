import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
      if (!token) {
        navigate('/admin/login');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Check for token at mount
    handleStorageChange();

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  return isAuthenticated ? children : null;
};

export default PrivateRoute;