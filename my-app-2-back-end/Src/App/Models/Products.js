import Sequelize from 'sequelize';
import pkg from 'sequelize';
const { Model } = pkg; // Model fica dentro de pkg que fica dentro de sequelize

class Product extends Model{
  static init(sequelize){
    super.init({
      // Todo da ves que for querer gravar devo mandar os seguintes dados nos seguintes formatos exeto virtual
      name: Sequelize.STRING, 
      price: Sequelize.INTEGER,
      category: Sequelize.STRING,
      path: Sequelize.STRING, // o path tem o nome do arquivo de imagem
      url: { // Os metodos virtuais nao sao gravados no banco de dados so aparecem quando chamaos a lista.
        type: Sequelize.VIRTUAL, // Os metodos virtuais nao sao gravados no banco de dados so aparecem quando chamaos a lista.
        get(){
          return `http://localhost:3000/product-file/${this.path}`
        }
      }

    },{
      sequelize,
    })
  }
}

export default Product