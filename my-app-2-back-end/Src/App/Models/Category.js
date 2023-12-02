import Sequelize from 'sequelize';
import pkg from 'sequelize';
const { Model } = pkg; // Model fica dentro de pkg que fica dentro de sequelize

class Category extends Model{
  static init(sequelize){
    super.init({
      name: Sequelize.STRING, 
    },
    {
      sequelize,
    }
    )
    return this 
  }
}

export default Category