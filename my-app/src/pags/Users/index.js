import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom' // Permite navegar pelas Urls
import { v4 } from 'uuid'
import axios from 'axios'
import Avatar from '../../assets/User Profile_Monochromatic 2.svg'
import Arrow from '../../assets/arrow.svg' //damos um nome de arrow. pq ela nao tem nome no arquivo original 
import Trash from '../../assets/Trash.svg'
import { Container,
  H1,
  P,
  Imagen,
  Containeritens,
  Button,
  User
 } from './Appstyle.js'

const Us = () => {
  // Math.random() Gera um numero aletorio
  const [users,setusers] = useState([])
  
  // useEffect Inicializa o seu primeiro parametro assim que a pagina é recarregada ou quando o estado de algo muda dentro do array de monitoramento do segundo parametro do useEffect.
  useEffect(() => { 
    async function fetchUser(){ 
      const { data:URLusers } = await axios.get("http://localhost:3001/users")
      setusers(URLusers)
    }
    fetchUser()
  },[])

    async function deleteUsers(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newusers = users.filter(user => user.id != userId) //filter roda cada item da lista e apaga se der true.
    setusers(newusers)
  }
  const navegate  = useNavigate()
  function SelectPag(){
    navegate("/")
  }
  return (
    <Container>
      <Imagen alt='imagen.png' src={Avatar} /> 
      <Containeritens>
      <H1>Usuarios</H1>
       {/*se em: onClick={addNewUser} addNewUser estver com () ex: addNewUser(). o js vai chamar sem que o botao tenha sido clicado na primeira vez. */}
      <ul>
        {/* Os Valores E Atributos das tags armazenam os valores que chegam assim como variaveis */}
        { users.map( user => ( 
        <User key={user.id}>
          <p>{user.name}</p> - <p>{user.age}</p>
          <button onClick={() => deleteUsers(user.id)}>{/* A '() =>' é para impedir que ao iniciar a aplicaçao ela nao seja chamada sem que tenha um clik */}
            <img src={Trash} alt='Lata-de-lixo' />
            </button>
          </User>))
      }
      </ul>
      <Button onClick = {SelectPag} > <img alt='Arrow' src={Arrow} /> Voltar</Button>
      </Containeritens>
    </Container>
  )
}
export default Us