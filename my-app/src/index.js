import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pags/Home'; // './pags/Home' vai abrir o index.js automaticamente
import User from './pags/Users'; 
import Global from './style/global-style'; // Global é um nome criado aqui ja que no arquivo fonte nao declaramos um nome.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // O metodo render so pode retornar para um item assim como return
  <>
    <User /> <Global/> 
  </>
);