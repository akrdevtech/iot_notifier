const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const utilities = require('./utilities');
const logger = require('morgan');
const admin = require('firebase-admin');
require('dotenv').config()

const serviceAccount = require("./configs/serviceAccountKey.json");

const controllers = require('./controllers');
const configs = require('./configs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

firebaseAdmin = admin;

const app = express();
utilities.db.connect();

app.configs = configs;
app.utilities = utilities;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(utilities.globalRequestInterceptor.requestInterceptor);

app.use('/api', controllers(app));
// app.use('/api', controllers(app).routes);

app.use(utilities.globalErrorHandler);

app.use(utilities.globalReponseHandler.responseHandler);

process.on('unhandledRejection', (reason) => {
  console.log('********************************');
  console.log('Reason: ' + reason);
  console.log('********************************');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
