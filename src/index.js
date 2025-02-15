import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import './styles/Projects.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* ✅ Wrap App in HashRouter */}
      <App />
    </Router>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
