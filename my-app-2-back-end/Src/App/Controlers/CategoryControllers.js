import * as yup from 'yup'
import Category from '../Models/Category.js'

class CategorysControllers {
  async store(request,response){
    const schema = yup.object().shape({
      name: yup.string().required(),
    })

    try{
      await schema.validateSync(request.body), { abortEarly: false } // abortEarly: false diz que ele deve acular todos os erros
    } catch(err) {
      return response.status(400).json({error: err.errors})
    }
    //  filename È  basicamente o nome do arquivo
    
    const { name } = request.body

    const categoryExist = await Category.findOne({
      where: {
        name,
      }
    })

    if(categoryExist){
      return response.status(400).json({ error: "category already exist" })
    }

    const { id } = await Category.create({ name })

      return response.json({ name, id })
  }
  async index(request,response){
    const category = await Category.findAll() // findAll Procura e lista todos os itens da lista
    console.log(request.userId)
    return response.json(category)
  }
}

export default new CategorysControllers()


// Posso colocar o await e o response em qualquer nivel abaixo dos mesmos.