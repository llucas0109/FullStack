'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{ //criar uma tabela
      // id: assim como as outras configuraçoes type e defaulValue sao Convençoes do sequelize ou seja palavras chaves. 
      id: { //configuraçoes da tabela  
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4, // valor padrao
        allowNull: false, // define que esse campo nao pode estar vazio
        primarykey: true, // Valor deve ser unico
      },
      name: {
        type:Sequelize.STRING, //tipo string
        allowNull: false, 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: { // password criptografado
        type:Sequelize.STRING, 
        allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: { // Marca O dia hora minuto segundo de quando foi criado
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: { // A data hora minuto de quando foi atualizado
        type: Sequelize.DATE,
        allowNull:false,
      },
     })
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};