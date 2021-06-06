'use strict';
module.exports = (sequelize, DataTypes) => {
  const stock = sequelize.define('stock', {
    name: DataTypes.STRING,
    current_market_price: DataTypes.STRING,
    market_cap: DataTypes.STRING,
    stock_PE: DataTypes.STRING,
    dividend_yield: DataTypes.STRING,
    roce: DataTypes.STRING,
    roe_previos_annum: DataTypes.STRING,
    debt_to_equity: DataTypes.STRING,
    eps: DataTypes.STRING,
    reserves: DataTypes.STRING,
    debt: DataTypes.STRING
  }, {});
  stock.associate = function(models) {
    // associations can be defined here
  };
  return stock;
};