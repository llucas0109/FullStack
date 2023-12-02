'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('categories', {  
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }, 
    created_at: { // Marca O dia hora minuto segundo de quando foi criado
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: { // A data hora minuto de quando foi atualizado
      type: Sequelize.DATE,
      allowNull:false,
    },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
     
  }
};
