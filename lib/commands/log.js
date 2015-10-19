var api = require('../api.js');

module.exports = {
  name: 'log',
  alias: [
    'log([.+],[.+],[.+])',
    'log [.+] [.+] [.+]'
  ],
  api: function(level, code, message) {
      return api.call({
          level: level,
          code: code,
          message: message
        }, '/diaries/' + global.applesauce.config.DIARY + '/entries', 'POST')
        .then(function(json) {
          var output = 'Done.';

          for(var i in json) {
            output += '\n\r' + json[i];
          }

          return output;
        });
    }
};