var api = require('../api.js');

module.exports = {
  name: 'getDiaries',
	alias: [
		'getDiaries()',
		'list'
	],
	api: function() {
  	return api.call({}, '/diaries', 'GET')
      	.then(function(json) {
        var output = '';

        output += 'ID                       Name';

        for(var i in json) {
          output += '\n\r' + json[i]._id + ' ' + json[i].name;
        }

        return output;
    });
  }
};