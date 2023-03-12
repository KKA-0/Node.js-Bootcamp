const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const toursRouter = require('../starter/routers/tourRouters')
const usersRouter = require('../starter/routers/userRouters')
//* Middlewares-start

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}
app.use(express.json());
app.use((req, res, next) =>
    {
    console.log('Hello from middleware 🙋‍♀️');
    next(); 
});

//* Middlewares-end

//* All the Routing-start

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

//* All the Routing-ends

module.exports = app;