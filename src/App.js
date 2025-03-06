import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import CustomFramingTool from './components/CustomFramingTool';
import GalleryWallConfigurator from './components/GalleryWallConfigurator';
import Inspiration from './components/Inspiration';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // State for dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply theme to the document
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <section id="custom-framing" className="section">
          <div className="container">
            <h2 className="section-title">Custom Framing Tool</h2>
            <CustomFramingTool />
          </div>
        </section>
        <section id="gallery-walls" className="section">
          <div className="container">
            <h2 className="section-title">Gallery Wall Configurator</h2>
            <GalleryWallConfigurator />
          </div>
        </section>
        <section id="inspiration" className="section">
          <div className="container">
            <h2 className="section-title">Inspiration</h2>
            <Inspiration />
          </div>
        </section>
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Us</h2>
            <About />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
