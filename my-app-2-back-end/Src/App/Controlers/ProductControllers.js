import * as yup from 'yup'
import Product from '../Models/Products.js'

class ProductsControllers {
  async store(request,response){
    const schema = yup.object().shape({
      name: yup.string().required(),
      price: yup.number().required(),
      category: yup.string().required(),
    })

    try{
      await schema.validateSync(request.body), { abortEarly: false } // abortEarly: false diz que ele deve acular todos os erros
    } catch(err) {
      return response.status(400).json({error: err.errors})
    }
    //  filename È  basicamente o nome do arquivo
    const { filename:path } = request.file // Pega o arquivo com nome do campo de file e ´pega um sub dado Chamado filename e muda o nome para path .
      // const file = request.file
      // console.log(file); 
    const { name, price, category } = request.body

    const products = await Product.create({
      name,
      price,
      category,
      path,
    })

      return response.json(products)
  }
  async index(request,response){
    const products = await Product.findAll() // findAll Procura e lista todos os itens da lista
    console.log(request.userId)
    return response.json(products)
  }
}

export default new ProductsControllers()


// Posso colocar o await e o response em qualquer nivel abaixo dos mesmos.