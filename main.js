var express = require('express');
var session = require('express-session');
var app = express();

app.set('view engine', 'ejs');

app.use(session({
	secret: 'jinbkim',
	resave: false,  // 세션의 변화가 없어도 다시 저장을 할건지 
	saveUninitialized: true  // 세션에 저장할 내용이 없어도 처음부터 세션을 설정할지
}));

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/request', require('./routes/request'));

app.listen(3000);
