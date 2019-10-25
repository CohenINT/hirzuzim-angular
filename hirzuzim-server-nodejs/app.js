var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require("cors");
var hizruz = require("./routes/hizruz")
var users = require('./routes/users');
var generate_uid = require('./routes/generate_uid');

var app = express();
app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use('/api/v1/generate_uid', generate_uid);
app.use('/getHizruzim',hizruz);

module.exports = app;
