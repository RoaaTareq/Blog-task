import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';  // Importing the CSS file
import App from './App';  // Import the App component

const rootElement = document.getElementById('root');

// Check if the root element exists
if (!rootElement) {
  alert('Root element not found');
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
