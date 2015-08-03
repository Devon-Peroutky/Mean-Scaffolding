// Declarations
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var mylogger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Config
var portNumber = 8080;

// Routing & API
var app = express();
var router = express.Router();

// ==================configuration =================
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(mylogger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static('data'));
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log("Loading Template...");
    res.sendfile('app/template.html'); 
});

// Host server
var httpServer = http.createServer(app);
httpServer.listen(portNumber);
console.log("Listening on port " + portNumber);

// Export
module.exports = app; 