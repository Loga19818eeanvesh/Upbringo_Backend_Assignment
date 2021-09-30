const Sequelize = require('sequelize');

const sequelize = require('../database');

const OrderItem = sequelize.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity:{
    type : Sequelize.INTEGER,
    allowNull: false
  },
  pricePerUnit: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  discount: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  gst: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  totalAmount: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

module.exports = OrderItem;
