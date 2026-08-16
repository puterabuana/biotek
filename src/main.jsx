import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const removeSeoFallback = () => {
  if (rootElement.childElementCount === 0) {
    requestAnimationFrame(removeSeoFallback);
    return;
  }

  document.getElementById('seo-fallback')?.remove();
};

requestAnimationFrame(removeSeoFallback);
