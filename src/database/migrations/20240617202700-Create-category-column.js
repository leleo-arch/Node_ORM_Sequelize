'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a coluna 'category_id' à tabela 'products'
    await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      references: { model: 'categories', key: 'id' }, // Define a chave estrangeira
      onUpdate: 'CASCADE', // Atualiza a referência na tabela 'products' se o 'id' em 'categories' for alterado
      onDelete: 'SET NULL', // Define o valor da coluna 'category_id' como NULL se a categoria for deletada
      allowNull: true, // Permite valores nulos na coluna 'category_id'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove a coluna 'category_id' da tabela 'products'
    await queryInterface.removeColumn('products', 'category_id');
  },
};
