import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for theme state
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  
  const [darkMode, setDarkMode] = useState(getSavedTheme());

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
