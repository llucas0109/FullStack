import { Router } from 'express';
import  express from 'express';
import cors from 'cors';
import UserController from './App/Controlers/UserController.js';
import SessionController from './App/Controlers/SessionController.js';
import ProductControllers from './App/Controlers/ProductControllers.js';
 import multer from 'multer';
 import multerConfig from '../config/multerConfig.js';

const app = express()
app.use(cors())
const rota = new Router()
 const upload = multer(multerConfig)

rota.post('/users', UserController.store)

rota.post('/sessions', SessionController.store)

rota.post('/products', upload.single('file'), ProductControllers.store)  // upload.single('file') |Um arquivo com nome do campo que envia como file

rota.get('/products', ProductControllers.index)

export default rota
