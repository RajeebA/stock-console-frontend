'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      current_market_price: {
        type: Sequelize.STRING
      },
      market_cap: {
        type: Sequelize.STRING
      },
      stock_PE: {
        type: Sequelize.STRING
      },
      dividend_yield: {
        type: Sequelize.STRING
      },
      roce: {
        type: Sequelize.STRING
      },
      roe_previos_annum: {
        type: Sequelize.STRING
      },
      debt_to_equity: {
        type: Sequelize.STRING
      },
      eps: {
        type: Sequelize.STRING
      },
      reserves: {
        type: Sequelize.STRING
      },
      debt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stocks');
  }
};