import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo1 from './logo1.png';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Set the browser tab favicon to the bundled `logo1.png` asset.
// Importing the image gives us a processed URL we can assign to the favicon link.
;(function setFavicon(href) {
  try {
    const head = document.getElementsByTagName('head')[0];
    let link = head.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      head.appendChild(link);
    }
    link.href = href;
  } catch (e) {
    // If document/head isn't present yet for some reason, ignore silently.
    // The default favicon from public/index.html will still apply.
    // eslint-disable-next-line no-console
    console.warn('Could not set favicon dynamically', e);
  }
})(logo1);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
