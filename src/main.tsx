import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import coolPicture from './assets/cool-picture.png';

function ensureFavicon() {
  try {
    const doc = document;
    let link = doc.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = doc.createElement('link');
      link.rel = 'icon';
      doc.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = coolPicture; // Vite will resolve to hashed asset URL in production

    // Also set shortcut icon for broader browser support
    let shortcut = doc.querySelector("link[rel='shortcut icon']") as HTMLLinkElement | null;
    if (!shortcut) {
      shortcut = doc.createElement('link');
      shortcut.rel = 'shortcut icon';
      doc.head.appendChild(shortcut);
    }
    shortcut.type = 'image/png';
    shortcut.href = coolPicture;
  } catch (e) {
    // Non-fatal; favicon is cosmetic
    console.warn('Failed to set favicon', e);
  }
}

ensureFavicon();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
