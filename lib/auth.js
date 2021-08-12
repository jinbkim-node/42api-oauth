require("dotenv").config();

var oauth2 = require('simple-oauth2')({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  site: 'https://api.intra.42.fr',
  authorizationPath: 'https://api.intra.42.fr/oauth',
  tokenPath: 'https://api.intra.42.fr/oauth/token'
});

exports.oauth2 = oauth2;