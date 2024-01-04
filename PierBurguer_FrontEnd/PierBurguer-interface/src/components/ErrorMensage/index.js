import { ErrorMessageStyles } from './style.js'
import { PropTypes } from '@mui/material'

function ErrorMessage ({children}) {

  return(
    <ErrorMessageStyles>
       {children}
    </ErrorMessageStyles>  
  )
}
// Quando a funçao que vai ser chamada no onclick nao tiiver parametro semplesmente colocamos o nome dela caso ela tenha parametros devemos passar um arrow function.
export default ErrorMessage

ErrorMessage.propTypes = {
  children: PropTypes
}