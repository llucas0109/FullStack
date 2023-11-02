import React, {useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom' // Permite navegar pelas Urls
import { v4 } from 'uuid'
import axios from 'axios'
import People from '../../assets/Consulting_Isometric 1.svg'
import Arrow from '../../assets/arrow.svg' //damos um nome de arrow. pq ela nao tem nome no arquivo original 
import Trash from '../../assets/Trash.svg'
import  Tittle  from '../../components/Title/index.js'// Podemos Tranformar Qualquer Funçao em uma tag basta colocar as '<> </>' mas nao Funcionara com atributos. cada tipo e cada tipo
import { Button } from '../../components/Botao/style.js'  // Importar um styled permite executar atributos
import { Container,
  P,
  Input,
  Imagen,
  Containeritens,
  Inputlabel,
 } from './Appstyle.js'

const App = () => {
  // Math.random() Gera um numero aletorio
  const [users,setusers] = useState([])
  const inputname = useRef() // useRef() da as Informaçoes,como current, correntes da tag.
  const inputage = useRef()// useRef() da as Informaçoes, como current, correntes da tag.
  const Navegate = useNavigate()
  async function addNewUser(){ 
    console.log('Clicou')
   // axios faz o acesso ao servidor e o .post faz o post, um envio de dados, que espera o link do servidor e parametros.
   // { data:newRes } Encontra o data que é a resposta do servidor e depois criar uma variavel chamada newRes que vai conter o valor de data"a resposta do server".
    const { data:newRes } = await axios.post("http://localhost:3001/users",{name: inputname.current.value, age: inputage.current.value}) 
    setusers([...users,newRes])
    SelectPag()
  }
   function SelectPag(){
    Navegate("/users")  
   }
  return (
    <Container>
      <Imagen alt='imagen.png' src={People} /> 
      <Containeritens>
      <Tittle>Olá</Tittle> {/*Colocamos o children aqui para ser rebido no componente e dai sim retornado a resposta De Olá.*/}
      <Inputlabel>Nome</Inputlabel>
      <Input ref={inputname} placeholder="Nome"/>

      <Inputlabel>Idade</Inputlabel>
      <Input ref={inputage} placeholder='Idade'/> {/* ref serve para dizer a Refrencia Do 'useRef' */}
       {/*se em: onClick={addNewUser} addNewUser estver com () ex: addNewUser(). o js vai chamar sem que o botao tenha sido clicado na primeira vez. */}
      <Button  onClick = { addNewUser }> {/* to="/users" Muda a url ao ser clicado para "/users". */}
        Cadastrar <img alt='Arrow' src={Arrow} />
        </Button>
      </Containeritens>
    </Container>
  )
}
export default App