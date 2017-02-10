var express = require('express'),
  app = module.exports = express(),
  signups = require('./routes/signups.js'),
  config = require('./routes/config.js');

var port = process.env.PORT || 3000;
var http   = require('http');
var server = http.createServer(app).listen(port);

console.log('Express server listening on port %d in %s mode', port, app.settings.env);
