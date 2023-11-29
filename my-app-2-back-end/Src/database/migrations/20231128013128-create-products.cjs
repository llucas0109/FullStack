'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: sequelize.STRING,
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
    
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
     
  }
};
