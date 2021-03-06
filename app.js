'use strict';

var express = require('express');
var http = require('http'); // socket.io
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var socketio = require('socket.io'); // socket.io

var app = express();
var server = http.Server(app); // socket.io
var io = socketio(server);

// connect to mongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simple-todo-' + app.get('env'));

var routes = require('./routes/index');
var tasks = require('./routes/tasks')(io); // socket.io

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// allow cors
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  next();
 });

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/tasks', tasks);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = server; // socket.io
