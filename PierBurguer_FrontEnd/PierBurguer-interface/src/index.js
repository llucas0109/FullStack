import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './containers/Login/index.js';
import Global from  './styles/globalStyles.js'; // O nome Deve Ter A primeira Letra em maiuculo quanto é envolvido com styled components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <Login />
  </React.StrictMode>
);

