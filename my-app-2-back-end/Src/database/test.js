import Sequelize from 'sequelize';
import conflog from '../Config/database.js';

const connection = new Sequelize(conflog);


try{
  connection.authenticate(); // Testando a conection
  console.log('connection has been susseful')
} catch (error) {
  console.error('unnable conection data base', error)
}

export default connection

//Para testar essa conecçao use: node src/database/test.js   