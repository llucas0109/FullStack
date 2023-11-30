
// Arquivo: src/database/Database.js
import Sequelize from 'sequelize';
import User from '../App/Models/User.js';
import conflog from '../../config/config.json' assert{type:'json'}
import Product from '../App/Models/Products.js';

  //fetch('../../config/config.json').then((response) => console.log(response)) //.then(response => response.json()) Assim que os dados 

  const models = [User, Product];

  class Database {
    constructor() {
      this.init();
    }
  
    init() {
      this.connection = new Sequelize(conflog);
      models.map((model) => model.init(this.connection));
    }
  }
  
  export default new Database();
  // Comando criar migrate npx ssequelize db:migrate e para excluir fica npx sequelize db:migrate:undo or undo:all

/*import { Sequelize } from "sequelize";

import User from "../App/Models/User.js";

const dbconfig = require('../Config/database.js')

const models = [User]

class Database{
  constructor(){
    this.init
  }
  init(){
    this.connection = new Sequelize(dbconfig)
    models.map( (model) => model.init(this.connection) )
  }
}

export default new Database() // 'new Database' Exporta Database Ja Instanciado com new e tambem chamamos o Database pq Usamos 'Database()' ou seja intanciada por ter um new e instanciada por ter ().  */