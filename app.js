var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var carRouter = require('./routes/cars')
var clientRouter = require('./routes/clients')
var repairRouter = require('./routes/repairs')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// router einbinden
app.use('/cars', carRouter)
app.use('/clients', clientRouter)
app.use('/repairs', repairRouter)

module.exports = app;
