const Sequelize = require('sequelize');

const sequelize = require('../database');

const Shop = sequelize.define('shop', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phoneNumber: Sequelize.STRING
});

module.exports = Shop;