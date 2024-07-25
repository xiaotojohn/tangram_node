const express = require('express');
const teacherRouter = express.Router();
const tController = require('../controllers/teacherController.js');

teacherRouter.use(express.urlencoded({extended: true}));

teacherRouter.get('/',tController.getTeacherView);
teacherRouter.post('/login',tController.postTeacherLogin);
// teacherRouter.get('/register',tController.getTeacherRegister);
// teacherRouter.post('/register',tController.postTeacherRegister);
// those two lines shall belong to adminRouter.js

module.exports = teacherRouter;