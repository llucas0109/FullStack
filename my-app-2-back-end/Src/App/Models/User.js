
// O nome do arquivo deve ter a primeira letra maiuscula porque é uma classe.
//import Sequelize, { Model } from 'sequelize' //Model é uma classe
import Sequelize, { Model } from 'sequelize';

// Restante do seu código aqui

class User extends Model { // Extends Model Permite que dentro da Classe User possamos usar Metodos Da clase Model
  static init(sequelize){  // Leia o que tem la em  baixo
    super.init({  // 'super.' Permite Erdar Da classe Model O metodo 'init' 
      name:Sequelize.STRING,
      email:Sequelize.STRING,
      password_hash:Sequelize.STRING,
      admin:Sequelize.BOOLEAN,
    },{
      sequelize, 
    })
  }
}

export default User

/* 
//Metodo de instancia de classe
class exemplo {
  andar(){}

  correr(){}
}
const obtençao = new exemplo; // Para Criar um objeto Para usar os metodos da class precisamos usar o new antes do nome da class o Nome disso é instanciamento.
obtençao.andar

// Metodo estatico de classe
class exemplo2 {
  // Uma funçao é declarada ao ser colocado o '()'
  static andar(){} //static possibilita o uso desse metodo usando caminho simple da class ate esse metodo em qualquer lugar do noss codigo

  static correr(){}
}
exemplo2.andar() // No Metodo Estatico Simplemente chamos a classe e o metodo para ter acesso 
exemplo2.correr()

 */