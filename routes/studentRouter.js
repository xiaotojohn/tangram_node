const express = require('express');

const studentRouter = express.Router();
const studentController = require('../controllers/studentController.js');

studentRouter.use(express.urlencoded({extended: true})); //parse form data

studentRouter.get('/', studentController.getStudentView); //student main page
studentRouter.post('/login', studentController.postStudentLogin); // student login
studentRouter.get('/register', studentController.getStudentRegister); // student register
studentRouter.post('/register', studentController.postStudentRegister); // student register

module.exports = studentRouter;