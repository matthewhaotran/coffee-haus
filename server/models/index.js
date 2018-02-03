const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_ab732c1c0df9091', 'b9ee42b8f8db04', '9a73dfff', {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
  .then(() => User.findAll())
  .then(jane => {
    console.log(jane);
  });

  module.exports = sequelize;