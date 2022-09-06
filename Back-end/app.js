var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')



mongoose.connect("mongodb+srv://admin:12345@cluster0.ug2slmy.mongodb.net/linsys?retryWrites=true&w=majority").then(()=>{
  console.log("Database connected")
}).catch((err)=>{
  console.log(err)
})
var indexRouter = require('./routes/index');
var ownerRouter = require('./routes/owner');

var app = express();

app.use(session({ secret: 'secretkey01', cookie: { maxAge: 600000 }, resave: false, saveUninitialized: true}))
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/owner', ownerRouter);

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
