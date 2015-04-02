var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//routes
var admins = require('./routes/admins');
var articles = require('./routes/articles');
var articleTypes = require('./routes/articleTypes');
var artisans = require('./routes/artisans');
var discounts = require('./routes/discounts');
var questionResponses  =require('./routes/questionResponses');
var questions  =require('./routes/questions');
var requestOfArticle = require('./routes/requestOfArticle');
var requestResponses = require('./routes/requestResponses');
var requests = require('./routes/requests');
var superadmin = require('./routes/superadmin');
var users = require('./routes/users');
var routes = require('./routes/index');

var app = express();
mongoose.connect('mongodb://localhost/gramas');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admins',admins);
app.use('/articles', articles);
app.use('/articleTypes', articleTypes);
app.use('/artisans', artisans);
app.use('/discounts', discounts);
app.use('/questionResponses', questionResponses);
app.use('/questions', questions);
app.use('/requestOfArticle', requestOfArticle);
app.use('/requestResponses', requestResponses);
app.use('/requests', requests);
app.use('/superadmin',superadmin);
app.use('/users', users);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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


module.exports = app;
