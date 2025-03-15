import React from 'react';
import './App.css';

// Import context providers
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import CustomFramingTool from './components/CustomFramingTool';
import GalleryWallConfigurator from './components/GalleryWallConfigurator';
import Inspiration from './components/Inspiration';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';

// Main app component that uses the theme context
function MainApp() {
  const { darkMode } = useTheme();
  
  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header />
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
      <Cart />
      <AuthModal />
    </div>
  );
}

// Wrapper component that provides all contexts
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
