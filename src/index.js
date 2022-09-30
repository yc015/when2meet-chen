// Main file for the When2Meet App

// Import react
import React from 'react';
// Import react dom 
import ReactDOM from 'react-dom/client';
// Get the css style sheet
import './index.css';
// import the App component from the App.js
import App from './App';

// Create the root of the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Inside the root render the App 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
