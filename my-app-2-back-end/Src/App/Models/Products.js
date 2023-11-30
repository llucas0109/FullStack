import Sequelize from 'sequelize';
import pkg from 'sequelize';
const { Model } = pkg; // Model fica dentro de pkg que fica dentro de sequelize

class Product extends Model{
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      price: Sequelize.INTEGER,
      category: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
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