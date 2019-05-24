const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo', 'root', 'root', { dialect: 'mysql' });

sequelize
  .sync()
  .then(() => {
    console.log('db tables created');
  })
  .catch(() => {
    console.log('db table creation error');
  });

module.exports = sequelize;
