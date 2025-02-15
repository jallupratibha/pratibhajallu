import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";  // ✅ Ensure you're using only one Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* ✅ Router should be wrapped here in index.js */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
