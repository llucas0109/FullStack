import { Button } from "./style.js"

function Botao(props){ 
    console.log(props)
    return <Button >{props.children}</Button>
}
export default Botao