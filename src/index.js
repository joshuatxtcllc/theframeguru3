import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create the root element for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React.StrictMode for additional checks in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Note: Consider adding error boundaries and other development tools as needed
