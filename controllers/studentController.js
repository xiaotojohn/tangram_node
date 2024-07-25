const asyncHandler = require('express-async-handler');
const viewpath = 'userViews';
const query = require('../db/querys.js');
const { all } = require('../routes/indexRouter.js');

var tempStudent = {
    username: 'Deamon',
    password: 'Targaryen'
};

const getStudentView = asyncHandler(
    async (req, res) => {
        res.render(viewpath + '/slogin', {
            title: 'Student Login Test Page',
            userInfo: tempStudent
        });
});

const postStudentLogin = asyncHandler(
    async (req, res) => {
        console.log(req.body);
        tempStudent = {
            username: req.body.username,
            password: req.body.password
        };
        res.redirect('/student');
});

const getStudentRegister = asyncHandler(
    async (req, res) => {
        allStudents = await query.getAllStudents();
        res.render('userViews/sregister', {
            title: 'Student Register Test Page',
            userInfo: allStudents
        });
});

const postStudentRegister = asyncHandler(
    async (req, res) => {
        console.log(req.body);
        tempStudent = {
            username: req.body.username,
            password: req.body.password
        };
        await query.createNewStudent(tempStudent.username, tempStudent.password);
        res.redirect('/student/register');
});


module.exports = { getStudentView, postStudentLogin, getStudentRegister, postStudentRegister };