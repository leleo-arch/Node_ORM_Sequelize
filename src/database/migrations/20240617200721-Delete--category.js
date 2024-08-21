'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.removeColumn('products', 'category')
  
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.createColumn('products', { category: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  }) 
  }
};
