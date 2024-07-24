const express = require('express');

const studentRouter = express.Router();
const studentController = require('../controllers/studentController.js');

studentRouter.use(express.urlencoded({extended: true}));

studentRouter.get('/', studentController.getStudentView);
studentRouter.post('/login', studentController.postStudentLogin);

module.exports = studentRouter;