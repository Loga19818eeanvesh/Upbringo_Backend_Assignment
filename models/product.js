const Sequelize = require('sequelize');

const sequelize = require('../database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type:Sequelize.STRING,
    allowNull: false
  },
  price: {
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
  },
  description: Sequelize.STRING
});

module.exports = Product;