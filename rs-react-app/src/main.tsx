import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = document.createElement('div');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
