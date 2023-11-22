'use strict';
//esse arquivo é para Configurar-mos a tabela do servidor.

//queryInterface, Sequelize São Objetos do sequelize. Nos conseguimos fazer uso dele sem importar o sequelize porque executamos um comando npx sequelize db:migrate que pegas esse arquivo e joga para ser traduzido e lá entao e importado devidamente o sequelize, tudo por de baixo ddos panos.

    const migration = {  
    up: async (queryInterface, Sequelize) => { // O (queryInterface, Sequelize) => É uma convençao do cli Um formato do Cli de se declarar os objetos queryInterface e Sequelize invez de ' async () =>'.
    await queryInterface.createTable('user',{ //criar uma tabela
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
    update_at: { // A data hora minuto de quando foi atualizado
      type: Sequelize.DATE,
      allowNull:false,
    },
   })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');     // a tebla automaticamente quando criada fica em plural seu nome
  }
};
module.exports = migration;

 //export default migration