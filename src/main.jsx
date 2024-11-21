import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';

// Target the root DOM element
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(
  <Provider store={store}>
   
      <App />
    
  </Provider>
);

