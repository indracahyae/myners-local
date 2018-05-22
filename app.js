var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer();
 
var routes = require('./routes/pengguna');
var connection = require('./config/db');

var app = express();

connection.init();
app.use(logger('dev'));

//request JSON data
app.use(bodyParser.json());
//request urlencode data
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

routes.configure(app);
module.exports = app;