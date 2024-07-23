// modules
require("dotenv").config(); // load the environment variables

const express = require('express');
const app = express();
var url = require('url');
const fs = require('fs');
const { error } = require("console");

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
// middleware
app.use(function(req, res, next) {
    console.log('request path: ' + req.url);
    next();
});

app.use('/', indexRouter);

app.use('/sample', sampleRouter);

app.use('*',errorHandler);


}

//----------------------end of dev mode----------------------//

/////////////////////// PROD MODE ///////////////////////
else{

}
