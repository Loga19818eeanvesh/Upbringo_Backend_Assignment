const Sequelize = require('sequelize');

const sequelize = new Sequelize('Assignment', 'root', 'MtamilL@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
