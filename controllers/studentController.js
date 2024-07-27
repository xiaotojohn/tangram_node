const asyncHandler = require('express-async-handler');
const viewpath = 'userViews';
const query = require('../db/querys.js');
const { all } = require('../routes/indexRouter.js');

var tempStudent = {
    username: 'Deamon',
    password: 'Targaryen'
};

const getStudentView = asyncHandler( // generating test login page for student
    async (req, res) => {
        res.render(viewpath + '/slogin', {
            title: 'Student Login Test Page',
            userInfo: tempStudent
        });
});

const postStudentLogin = asyncHandler( // test login for student, will return the login info
    async (req, res) => {
        console.log(req.body);
        tempStudent = {
            username: req.body.username,
            password: req.body.password
        };
        res.redirect('/student');
});

const getStudentRegister = asyncHandler( // generating test register page for student
    async (req, res) => {
        allStudents = await query.getAllStudents();
        // console.log(allStudents);
        res.render('userViews/sregister', {
            title: 'Student Register Test Page',
            userInfo: allStudents
        });
});

const postStudentRegister = asyncHandler( // test register for student, will return all registered students
    async (req, res) => {
        // console.log('here we are !!!!!! at postStudentRegister');
        // console.log(req.body);
        tempStudent = {
            username: req.body.username,
            password: req.body.password
        };
        await query.createNewStudent(tempStudent.username, tempStudent.password);
        res.redirect('/student/register');
});


module.exports = { getStudentView, postStudentLogin, getStudentRegister, postStudentRegister };