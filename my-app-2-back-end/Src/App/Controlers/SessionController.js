import * as yup from 'yup'
import User from '../Models/User.js'
import auth from '../../../config/auth.js'
import  Jwt  from 'jsonwebtoken' // Cria tokens de validaçao.
import Product from '../Models/Products.js'
// Depois que recebe uma response que nos criamos ele para de ler o resto do codigo e as outras response
class SessionController {
  async store(request,response){
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    const ifEmailOrPasswordNotExist = () => {
      return response.status(400).json({ error: "error make sure that your password or email are correct" })
    }

    if(!(await schema.isValid(request.body))){
      ifEmailOrPasswordNotExist()
    }
    const { email,password } = request.body

    const user = await User.findOne({ //  retorna true ou false mas tbm o modelo inteiro como segundario
      where: { email },
    })
    if(!user) {
      ifEmailOrPasswordNotExist()
    }

    if(!(await user.checkPassword(password))) {
      ifEmailOrPasswordNotExist()
    }

    return response.status(200).json({
    id: user.id,
    email,
    name: user.name,
    admin: user.admin,
    // Jwt.sign  cria o token com base nas suas duas propries. esse token conten dados recuperaveis.
    token: Jwt.sign({ id: user.id, name: user.name }, auth.secret, { // Primeiro prop é um id o segundo um nome bem aleatorio
      expiresIn: auth.expiresIn // Tempo para ser inspirado o token
     })
    })
  }
   
}

export default new SessionController()