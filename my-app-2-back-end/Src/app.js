// app.js
//import express from 'express';
//import rota from './route.js';
//import './database/index.js';

import express from 'express';
import rota from './route.js';
import './database/index.js';

//import port from './index.js'; // Tem que por o 'js'
class App{ 
  constructor(){
    this.app = express()
    this.middleware()
    this.route()
  } 
  middleware() {
    this.app.use(express.json())   
  }
  route(){
    this.app.use(rota) 
  }

}

//module.exports = { App } 

export default new App() // new cria um novo App() onde sera importado podendo por suas proprias configuraçoes
