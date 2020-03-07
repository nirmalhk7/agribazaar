var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var common = require('./routes/common');
var dashboard = require('./routes/dashboard');
var farmer = require('./routes/farmers');
var main = require('./routes/main');
var shoppers = require('./routes/shoppers');
var config = require('./config');
var cors = require('cors');
var app = express();

global.db=config;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/profile/:userid',common.getprofile);
app.use('/api/cart/:userId',dashboard.mycart);
app.use('/api/farmer/:userid/addItems',farmer.addItems);
app.use('/api/farmer/:userid/lastsales',farmer.lastSales);
app.post('/api/logout/:userid',main.logout);
app.post('/api/login/:userid',main.login);
app.use('/api/search/:search',main.search);
app.use('/api/search/itemseller/:item',main.getItemSeller);
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
