import { Router } from 'express';
import  express from 'express';
import { v4 } from 'uuid';
import User from './App/Models/User.js';
import cors from 'cors';

const app = express()
app.use(cors())

const rota = new Router()


rota.get('/', async (req, res) => {
   // User é uma extençao do model por isso consegue usar crete
   const user = await User.create({  // create cria uma linha e preenche com dados 
    id:v4(),
    name:'Lucas',
    email:'lpcampestrini@gmail.com',
    password_hash:'9981'
  })
  //console.log(user)
  //return res.json(user);
  return res.json({foi:'foi'});
});



export default rota