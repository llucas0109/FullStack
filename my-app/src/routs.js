import {  BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import Home from './pags/Home' //encontra sozinho o arquivo index.js
import users from './pags/Users'

function Routos(){

  return(
    //Router permite definir as 'Route' (rotas).
    //Route Define a rota
    //Routes faz com que ao encontrar a route com o caminho correto ele nao continue procurando por outra a baixo.
    <Router>
      <Routes>
        {/*path define o caminho Url, e o Componente define onde esta o arquivo*/}
        <Route  path="/" Component={Home} /> {/*path define o caminho    path="/" volta para home e exact defini que o caminho é exatamente o que esta escrito em path' */}
        <Route  path="/users" Component={users} /> {/*Caminho sera usrs*/}
      </Routes>
    </Router>
  )
}
export default Routos