import React, { createContext, useState, useEffect, useContext } from 'react';
import { mockAuthService } from '../services/mockAuthService';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check if user is already logged in
  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const user = await mockAuthService.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Failed to get current user:", error);
      } finally {
        setLoading(false);
      }
    };
    
    checkLoggedInUser();
  }, []);
  
  // Login function
  const login = async (email, password) => {
    setError(null);
    try {
      const user = await mockAuthService.login(email, password);
      setCurrentUser(user);
      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  
  // Register function
  const register = async (name, email, password) => {
    setError(null);
    try {
      const user = await mockAuthService.register(name, email, password);
      setCurrentUser(user);
      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  
  // Logout function
  const logout = async () => {
    try {
      await mockAuthService.logout();
      setCurrentUser(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      loading, 
      error, 
      login, 
      register, 
      logout,
      isAuthenticated: !!currentUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
