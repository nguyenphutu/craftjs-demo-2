import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './pages';

const root = ReactDOM.createRoot(document.getElementById("root")); // Sử dụng createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);