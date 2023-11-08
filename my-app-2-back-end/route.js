import { Router } from "express";
const rota = new Router()


rota.get('/', (req, res) => {
  res.send('Hello World!');
});



export default rota