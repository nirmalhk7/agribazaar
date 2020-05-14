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
var router = express.Router();

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

app.use('/', router.get('/',function(req,res,next){
  res.redirect('/api')
}));
app.use('/api',router.get('/',function(req,res,next){
  res.render('index',{title:"AgriBazaar"})
}));
app.post('/api/logout/:userid',main.logout);
app.post('/api/login',main.login);
app.use('/api/:userId',common.getprofile);
app.use('/api/:userId/cart',dashboard.mycart);
app.use('/api/:userid/addItems',farmer.addItems);
app.use('/api/:userid/lastsales',farmer.lastSales);
app.use('/api/search/:squery',main.search);
app.use('/api/search/itemseller/:item',main.getItemSeller);


var searchRouter = require('./routes/searchRouter');
var itemRouter = require('./routes/itemRouter');
var authRouter = require()
app.use('/api/search',searchRouter);
app.use('/api/item',itemRouter);
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
