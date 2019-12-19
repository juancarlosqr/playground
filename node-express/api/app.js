const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/', userRouter);
app.use('/auth', authRouter);

module.exports = app;
