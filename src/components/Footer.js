import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">The Frame Guru.</h2>
          <p className="footer-tagline">Custom Framing Redefined</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Site Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#custom-framing">Custom Framing</a></li>
              <li><a href="#gallery-walls">Gallery Walls</a></li>
              <li><a href="#inspiration">Inspiration</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Customer Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Framing Care</a></li>
              <li><a href="#">Order Status</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} The Frame Guru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
