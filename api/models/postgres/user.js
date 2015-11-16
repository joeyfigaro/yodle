var config = require('./config/default.js'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: 'postgres',
      pool: {
        min: config.pool.min,
        max: config.pool.max,
        idle: config.pool.idle
      }
    });

var User = sequelize.define('User', {
  email: { type: Sequelize.STRING, unique: true },
  password: Sequelize.STRING,
  createdBy: Sequelize.STRING
});

User.sync({ force: true }).then(function() {
  return User.create({
    email: config.initial.user.email,
    password: config.initial.user.password
  });
});
