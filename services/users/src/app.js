const express = require('express');
const morgan = require('morgan');
const winston = require('../config/winston');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/users');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

if (process.env.NODE_ENV !== 'test') { app.use(morgan('combined', { stream: winston.stream })); }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  const message = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  res.status(err.status || 500);
  res.json({
    status: 'error',
    message: err,
  });
});
/* eslint-enable no-unused-vars */

module.exports = app;
