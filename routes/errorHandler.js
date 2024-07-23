const {Router} = require('express');
const express = require('express');
const errorHandler = Router();

errorHandler.use(express.static('public/not-found.html'));

module.exports = errorHandler;