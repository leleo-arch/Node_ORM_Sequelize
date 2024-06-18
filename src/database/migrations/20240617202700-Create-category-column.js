'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('products', 'category_id',{
      type: Sequelize.INTEGER,
      References: {model:  'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,

    }) 
  
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.createColumn('products', 'category_id') 
  },
};
