import styled from "styled-components"
import { H1 } from "./style.js"
// Para criar um componente costruims aqui Uma Caixa Vazia A casca'. Depois quando quisermos so basta prencher essa casca com dados Utilando as '(Props)' para criar O componente .
function Tittle({children}){
    return <H1>{children}</H1>
}
export default Tittle