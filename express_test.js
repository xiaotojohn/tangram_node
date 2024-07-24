// modules
require("dotenv").config(); // load the environment variables

const express = require('express');
const app = express();
// const fs = require('fs');
const { error } = require("console");
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

// constants for dev mode
const PORT = process.env.PORT;
app.listen(PORT,() => console.log('now listening on port ' + PORT));
console.log('server started');

// routes
const indexRouter = require('./routes/indexRouter');
const sampleRouter = require('./routes/sampleRouter');
const errorHandler = require('./routes/errorHandler');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const chatRouter = require('./routes/chatRouter');

// application level middleware

// log the request path
app.use(function(req, res, next) {
    console.log('request path: ' + req.url);
    next();
});

// serve favicon, browser will request this file as a default
app.get('/favicon.ico', (req,res) => {
    // res.writeHead(200, {'Content-Type': 'image/png'});
    res.sendFile(path.join(__dirname, 'public', 'images','favicon.png'));
});

// routes

app.use(['/'], indexRouter);

app.use('/sample', sampleRouter);

app.use('/student', studentRouter);

app.use('/teacher', teacherRouter);

app.use('/chat', chatRouter);

app.use('*',errorHandler);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong...Back to the ' + '<a href=/sample>Sample</a> or '+ '<a href=/>Home Page</a>');
  });
  

}

//----------------------end of dev mode----------------------//

/////////////////////// PROD MODE ///////////////////////
else{

}
