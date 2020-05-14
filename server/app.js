var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var cors = require('cors');
var app = express();
var router = express.Router();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var searchRouter = require('./routes/searchRouter');
var itemRouter = require('./routes/itemRouter');
var authRouter = require('./routes/authRouter');
var cartRouter = require('./routes/cartRouter');
var userRouter = require('./routes/userRouter');
var farmerRouter = require('./routes/farmerRouter');
var mysqlRouter = require('./config');
global.db=mysqlRouter;

app.use('/', router.get('/',function(req,res,next){
  res.redirect('/api')
}));
app.use('/api',router.get('/',function(req,res,next){
  res.render('index',{title:"AgriBazaar"})
}));
app.use('/api/search',searchRouter);
app.use('/api/item',itemRouter);
app.use('/api/auth',authRouter);
app.use('/api/cartRouter',cartRouter);
app.use('/api/users',userRouter);
app.use('/api/farmers',farmerRouter);
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
