const {Router} = require('express'); //destructure Router from express
const express = require('express'); //import express
const indexRouter = Router();

// routes

indexRouter.use(express.static('public'));

module.exports = indexRouter;