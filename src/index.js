
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { initialize } from './keycloak/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

initialize().then( () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}).catch( () => {
  root.render(
    <React.StrictMode>
    <h1> Critical Error! </h1>
    <p>Keycloak has failed to start! please contact admin</p>
    </React.StrictMode>
  );
})