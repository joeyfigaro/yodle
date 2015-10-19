var api = require('../api.js');

module.exports = {
	name: 'changePassword',
	alias: [
		'changePassword([.+])',
		'set password [.+]',
		'password [.+]'
	],
	api: function(password) {
		return api.call({
	    	password: password
	  	}, '/users/me', 'PATCH')
	    .then(function(json) {
	    	return json;
	    });
	}
};