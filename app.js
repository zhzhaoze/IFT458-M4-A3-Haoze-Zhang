//** Code START
// 3) ROUTES Haoze Zhang
const express = require('express');
const morgan = require('morgan');

const customerRouter = require('./routes/customerRoutes');
const loanRouter = require('./routes/loanRoutes');
const loanledgerRouter = require('./routes/loanledgerRoutes');
// const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
//not required

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// const courseRouter = require('./routes/courseRoutes');
app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/loanledgers', loanledgerRouter);
//app.use('/api/v1/users', userRouter);

module.exports = app;
//** code END