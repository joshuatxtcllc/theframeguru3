import React from 'react';
import './Hero.css';
// Note: In a real project, you would import an actual image
// import heroBackground from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Custom Framing Redefined</h1>
        <p className="hero-subtitle">
          Elevate your artwork with precision-crafted frames that blend futuristic design with timeless craftsmanship
        </p>
        <button className="btn btn-primary hero-cta">Start Framing</button>
      </div>
    </section>
  );
};

export default Hero;
