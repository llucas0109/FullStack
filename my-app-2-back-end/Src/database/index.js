
// Arquivo: src/database/Database.js

import Sequelize from 'sequelize';
import User from '../App/Models/User.js';

//import dbconfig from '../Config/database.js';
import conflog from '../Config/database.js';
const models = [User];

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