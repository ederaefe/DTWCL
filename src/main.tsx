import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent circular structure serialization crashes when reporting errors through iframes
window.addEventListener('error', (event) => {
  // Log the actual clean error fields so we can see what the real problem is
  console.error('[Error Intercept]', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error ? {
      message: event.error.message,
      stack: event.error.stack
    } : null
  });
  
  // If the error object is circular or contains a window reference, prevent default bubbling
  // which might trigger postMessage serialization crashes in the iframe host environment.
  event.preventDefault();
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Rejection Intercept]', {
    reason: event.reason ? (event.reason.message || event.reason) : 'Unknown rejection reason'
  });
  event.preventDefault();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

