'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('products', { 
    id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
 price: {
    type: Sequelize.STRING,
    allowNull: false,
    
  },
 category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  path: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('products');

  }
};
