import axios from "axios";

export const apiPierBurguer = axios.create({
  baseURL:'http://localhost:3001'
})