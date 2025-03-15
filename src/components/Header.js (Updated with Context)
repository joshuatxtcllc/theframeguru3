import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { currentUser, logout, isAuthenticated } = useAuth();
  const { getTotalItems, toggleCart } = useCart();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Listen for scroll events to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleAuthClick = () => {
    if (isAuthenticated) {
      // Show dropdown menu with profile and logout options
    } else {
      // Trigger auth modal
      document.dispatchEvent(new CustomEvent('open-auth-modal'));
    }
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      // Maybe show a success message
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#" className={darkMode ? 'neon-glow-teal' : ''}>
            The Frame Guru.
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#custom-framing">Custom Framing Tool</a></li>
            <li><a href="#gallery-walls">Gallery Walls</a></li>
            <li><a href="#inspiration">Inspiration</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          {/* Theme toggle */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          
          {/* Cart button */}
          <button 
            className="cart-toggle" 
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}
          </button>
          
          {/* Auth button */}
          <button 
            className="auth-toggle" 
            onClick={handleAuthClick}
            aria-label={isAuthenticated ? 'Account' : 'Sign in'}
          >
            {isAuthenticated ? (
              <div className="user-avatar">
                {currentUser.name.charAt(0)}
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
