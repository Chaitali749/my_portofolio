import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import fonts
import '@fontsource/inter/400.css';       // Regular
import '@fontsource/inter/500.css';       // Medium
import '@fontsource/inter/600.css';       // Semi-bold
import '@fontsource/inter/700.css';       // Bold
import '@fontsource/poppins/400.css';     // Regular
import '@fontsource/poppins/500.css';     // Medium
import '@fontsource/poppins/600.css';     // Semi-bold
import '@fontsource/poppins/700.css';     // Bold

// Get the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
