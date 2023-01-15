import React from 'react';
import ReactDOM from 'react-dom/client';

import { NavigationProvider } from './lesson13-navigattion/context/navigation';

// import './styles/index.css';
import './styles/output.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
