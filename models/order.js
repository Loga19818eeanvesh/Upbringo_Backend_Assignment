const Sequelize = require('sequelize');

const sequelize = require('../database');

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  buyerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  buyerPhoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalAmount : {
      type: Sequelize.INTEGER,
      allowNull: false
  }
});

module.exports = Order;
