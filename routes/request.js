var express = require('express');
var router = express.Router();
var auth = require('../lib/auth.js');

router.post('/', function (req, res) {
	var token = req.session.token;
	if (token) {
		auth.oauth2.api('GET', 'https://api.intra.42.fr/v2/me', {
			access_token: token.token.access_token
		}, function (err, data) {
			if (err)
				res.render(('request'), { req_ret: 'Bad request.' });
			else
				res.render(('request'), { req_ret: JSON.stringify(data) });
		});
	}
});

router.get('/', function (req, res) {
	if (!req.session.token)
		res.redirect('/');
	else
		res.render(('request'), { req_ret: '' });
});

module.exports = router;
