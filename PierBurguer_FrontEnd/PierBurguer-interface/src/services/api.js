import axios from "axios";

const apiPierBurguer = axios.create({ // cria uma nova instancia de configuraçoes personalizaveis.
  baseURL:'http://localhost:3001'  // url que o axios se conectara 
})

export default apiPierBurguer