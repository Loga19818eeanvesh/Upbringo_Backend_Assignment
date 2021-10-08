const Sequelize = require('sequelize');

const sequelize = new Sequelize('Assignment', 'root', 'Assg@11', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
});

module.exports = sequelize;
