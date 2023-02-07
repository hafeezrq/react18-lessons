import React from 'react';
import ReactDOM from 'react-dom/client';

import { NavigationProvider } from './lesson13-navigation/context/navigation';
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
