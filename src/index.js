import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+
import './style.scss';  // Import the CSS file
import App from './App';  // Import the App component

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
