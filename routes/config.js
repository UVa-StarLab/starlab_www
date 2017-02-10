var app = require('../server'),
	express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
  	h5bp = require('h5bp'),
	compress = require('compression'),
	ua = require('universal-analytics'),
	visitor = ua('UA-41930060-1');

visitor.pageview("/").send()
visitor.pageview("/signup").send()

app.use(h5bp({ root: __dirname + '../app' }));
// in order to serve files, you should add the two following middlewares
app.use(compress());
//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, '../app'))); //  "public" off of current is root

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended:true
}));

app.set('view engine', 'jade');
app.get('/message', function(req, res){
  res.send('message');
});
app.get('/googlee5289762658fad15.html', function(req, res){
    res.sendFile(path.join(__dirname, '../app/tmpl/googlee5289762658fad15.html'));
});
app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, '../app/tmpl/index.html'));
});
app.get('/sap', function(req, res) {
    res.sendFile(path.join(__dirname, '../app/tmpl/sap/intro.html'));
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../app/tmpl/index.html'));
});
