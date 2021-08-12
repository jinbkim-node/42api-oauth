var express = require('express');
var router = express.Router();
var auth = require('../lib/auth.js');

router.get('/', (req, res) => {
	// 로그인할 페이지로 리다이렉트
	res.redirect('https://api.intra.42.fr/oauth/authorize?client_id=2f427bd182c1d4bfed1fdf46b42a9f4cb32bb814888c1a6b4daaef693f14865a&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2F42api%2Fcallback&response_type=code');
});

// 로그인 성공후의 리다이렉트 url
router.get('/42api/callback', (req, res) => {
	auth.oauth2.authCode.getToken({
		code: req.query.code,
		redirect_uri: 'http://localhost:3000/auth/42api/callback'
	}, save_token);

	function save_token(error, result) {
		if (error)
			console.log('Access Token Error', error.message);
		else {
			req.session.token = auth.oauth2.accessToken.create(result);  // 계속 생성하는거 바꾸기
		}
		res.redirect('/request');
	}
});

module.exports = router;
