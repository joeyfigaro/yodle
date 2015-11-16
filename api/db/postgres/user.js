'use strict';

var Promise = require('promise'),
    Sequelize = require('sequelize'),
    User = require('../../models/postgres/user.js');

class PostgresDriver {}

PostgresDriver.auth = function(email, password) {
  return new Promise((_resolve, _reject) => {
    User.findOne({ where: { email: email } }).then((user) => {
      if(user) {
        _resolve(user);
      } else {
        _reject(401, 'Invalid credentials.');
      }
    });
  });
};

PostgresDriver.listUsers = function() {
  return new Promise((_resolve, _reject) => {
    User.findAll().then((users) => {
      _resolve(users);
    });
  });
};

PostgresDriver.getUser = function(user) {
  return new Promise((_resolve, _reject) => {
    User.findOne({ where: { id: user.id } }).then((user) => {
      if(user) {
        _resolve(user);
      } else {
        _reject(404, 'No user found.');
      }
    });
  });
};

PostgresDriver.createUser = function(userData) {
  var user = new User();
  if(userData.email) user.email = userData.email;
  if(userData.password) user.password = userData.password;

  return new Promise((_resolve, _reject) => {
    User.findOrCreate({ where: { email: userData.email } }).spread((user, created) => {
      _resolve(user);
    });
  });
};

PostgresDriver.editUser = function(user, userData) {
  var data = {};
  if(userData.email) data.email = userData.email;
  if(userData.password) data.password = userData.password;

  return new Promise((_resolve, _reject) => {

  });
};

module.exports = PostgresDriver;
