import { Router } from 'express';
import { v4 } from 'uuid';
import User from './App/Models/User.js';

const rota = new Router()


rota.get('/', async (req, res) => {
  const user = await User.create({
    id:v4(),
    name:'Lucas',
    email:'lpcampestrini@gmail.com',
    password_hash:'9981'
  })
  return res.json(user);
});



export default rota