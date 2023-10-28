import React from 'react';
import ReactDOM from 'react-dom/client';
import Routos from './routs';
import Home from './pags/Home'
import Global from './style/global-style'; // Global é um nome criado aqui ja que no arquivo fonte nao declaramos um nome.
  // ReactDOM.render tem dois parametros o pirmeiro é o que vai ser renderizado e o segundo é onde
  ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Routos /> <Global/> 
  </>
);