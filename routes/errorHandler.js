const express = require('express');
const errorHandler = express.Router();

errorHandler.use(express.static('public/not-found.html'));

module.exports = errorHandler;