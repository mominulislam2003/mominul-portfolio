/**
 * =============================================================================
 * APPLICATION ENTRY POINT (src/main.jsx)
 * =============================================================================
 * Bootstraps the React virtual DOM tree and mounts it to the DOM's #root element.
 * 
 * - React.StrictMode: Development tool for highlighting potential problems in
 *   an application, running extra checks, and detecting deprecated APIs.
 * - App.jsx: The top-level root component containing state, animations, and layout.
 * - styles.css: Global styling, Tailwind directives, glassmorphic styling, and animations.
 * =============================================================================
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Create a React root on the #root HTML element and render the App
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

