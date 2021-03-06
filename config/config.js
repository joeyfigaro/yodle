var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'local';

var config = {
  local: {
    root: rootPath,
    app: {
      name: 'yodle'
    },
    secret: 'nobodyknowsthis',
    port: (process.env.PORT || 3000),
    //db: 'tingodb:///tmp/yodle'
    DB: (process.env.DB || 'mongodb://localhost/yodle-development')
  },

  development: {
    root: rootPath,
    app: {
      name: 'yodle'
    },
    secret: 'nobodyknowsthis',
    port: (process.env.PORT || 3000),
    DB: process.env.MONGOLAB_URI
  },

  test: {
    root: rootPath,
    app: {
      name: 'yodle'
    },
    secret: 'nobodyknowsthis',
    port: 3000,
    DB: 'mongodb://localhost/yodle-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yodle'
    },
    secret: 'nobodyknowsthis',
    port: 3000,
    DB: 'mongodb://localhost/yodle-production'
  }
};

module.exports = config[env];
