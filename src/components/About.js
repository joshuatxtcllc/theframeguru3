import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-heading">Our Story</h3>
          <p>
            Founded in 2020, The Frame Guru emerged from a passion for blending cutting-edge design with authentic craftsmanship. We saw a gap in the framing industry—either you chose mass-produced generic frames or expensive custom options with outdated designs.
          </p>
          <p>
            Our team of designers and master framers came together with a vision: to create a platform where technology meets tradition. We combine precision digital tools with hand-finished details, ensuring each frame not only protects your precious artwork but elevates it with a touch of futuristic elegance.
          </p>
          <p>
            Today, we're proud to be at the forefront of custom framing innovation, offering solutions that are as unique as the memories and art they showcase. Our commitment to quality materials, sustainable practices, and exceptional design continues to guide everything we do.
          </p>
          
          <div className="about-values">
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="value-content">
                <h4>Quality First</h4>
                <p>Premium materials and archival-grade components in every frame we craft.</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <div className="value-content">
                <h4>Innovative Design</h4>
                <p>Constantly pushing boundaries with new techniques and aesthetic directions.</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="value-content">
                <h4>Sustainability</h4>
                <p>Eco-friendly materials and responsible manufacturing practices.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img src="/api/placeholder/500/700" alt="The Frame Guru workshop" />
          <div className="image-caption">Our design studio in Portland, Oregon</div>
        </div>
      </div>
    </div>
  );
};

export default About;
