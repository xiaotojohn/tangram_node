// modules
require("dotenv").config(); // load the environment variables

const express = require('express');
// const {Pool} = require('pg'); // pool is set and run in db/pool.js
const app = express();
// const fs = require('fs');
// const { error } = require("console");
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var path = require('path');

// view engine

app.set("views", path.join(__dirname, "views")); 
// here we define the views directory
// later every time we render a view, express will look in this directory
app.set("view engine", "ejs"); // here we define the view engine

// environment variables

const MODE = process.env.MODE

/////////////////////// DEV MODE ///////////////////////

if (MODE === 'dev') {


// env constants for dev mode
const PORT = process.env.PORT;



// console info
app.listen(PORT,() => console.log('now listening on port ' + PORT));
console.log('server started');

// routes
const indexRouter = require('./routes/indexRouter');
const sampleRouter = require('./routes/sampleRouter');
const errorHandler = require('./routes/errorHandler');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const chatRouter = require('./routes/chatRouter');

// APP LEVEL MIDDLEWARE //

// log the request path
app.use(function(req, res, next) {
    console.log('request path: ' + req.url);
    next();
});

// set up cors
app.use(cors());

// serve favicon, browser will request this file as a default
app.get('/favicon.ico', (req,res) => {
    // res.writeHead(200, {'Content-Type': 'image/png'});
    res.sendFile(path.join(__dirname, 'public', 'images','favicon.png'));
});

// ROUTES //

app.use(['/'], indexRouter);

app.use('/sample', sampleRouter);

app.use('/student', studentRouter);

app.use('/teacher', teacherRouter);

app.use('/chat', chatRouter);

// ERROR HANDLING //

// non-existing routes
app.use('*',errorHandler);

// error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong...Back to the ' + '<a href=/sample>Sample</a> or '+ '<a href=/>Home Page</a>');
  });
  

}

/////////////////////// END DEV MODE //////////////////////



/////////////////////// PROD MODE /////////////////////////
else{

}
