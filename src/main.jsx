import React from 'react'; // Add this line if using older React or unsupported environment
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
  </BrowserRouter>
);