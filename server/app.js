var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const sittersRouter = require('./routes/sitters')
const petsRouter = require('./routes/pets')
const ownersRouter = require('./routes/owners');
// const bookingsRouter = require('./routes/bookings');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sitters', sittersRouter);
app.use('/pets', petsRouter);
app.use('/owners', ownersRouter);
// app.use('/bookings', bookingsRouter);

module.exports = app;

// require('dotenv').config()
// const {ENVIRONMENT, PORT} = process.env;
// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');

// const app = express();

// // middleware setup
// app.use(morgan(ENVIRONMENT));
// app.use(bodyParser.json());


// app.get('/', (req, res) => {
// 	res.json({greetings: 'hello world'});
// })

// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// module.exports = app;