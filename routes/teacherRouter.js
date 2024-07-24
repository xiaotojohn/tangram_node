const express = require('express');
const teacherRouter = express.Router();
const tController = require('../controllers/teacherController.js');

teacherRouter.use(express.urlencoded({extended: true}));

teacherRouter.get('/',tController.getTeacherView);
teacherRouter.post('/login',tController.postTeacherLogin);


module.exports = teacherRouter;