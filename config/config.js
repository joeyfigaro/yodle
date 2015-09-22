var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'applesauce'
    },
    port: 3000,
    //db: 'tingodb:///tmp/applesauce'
    db: 'mongodb://localhost/applesauce-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'applesauce'
    },
    port: 3000,
    db: 'mongodb://localhost/applesauce-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'applesauce'
    },
    port: 3000,
    db: 'mongodb://localhost/applesauce-production'
  }
};

module.exports = config[env];