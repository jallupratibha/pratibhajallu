import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom"; // ✅ FIXED: Use HashRouter for GitHub Pages

import './index.css';
import App from './App';
import './styles/Projects.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* ✅ Wrapped the app in HashRouter */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
