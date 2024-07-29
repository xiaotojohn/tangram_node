const asyncHandler = require('express-async-handler');
const viewpath = 'userViews';
const query = require('../db/querys.js');
const bcrypt = require('bcrypt');

let tempStudent;


const getStudentView = asyncHandler( // generating test login page for student
    async (req, res) => {
        console.log(req.session);
        // console.log(!req.session.flash);
        if (req.user) {
            res.redirect('/student/studenthome');
        } 
        else {
            if (req.session.flash && Object.keys(req.session.flash).length > 0){
                res.render(viewpath + '/slogin', {
                    title: 'Student Login Test Page',
                    user: req.user,
                    message: req.session.flash.error[0]
                });
            }
            else {
                res.render(viewpath + '/slogin', {
                    title: 'Student Login Test Page',
                    user: req.user,
                    message: null
                });
            }
        }
        ;
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

const getStudentHome = asyncHandler( // generating test home page for student
    async (req, res) => {
        if (!req.user){
            res.send('You are not logged in! <a href="/student">back to Login</a>');
        }
        else{
        console.log("hello bro here is the user info");
        console.log(await req.user);
        res.render(viewpath + '/sdashboard', {
            user: await req.user
        })
        };
});

const getStudentLogout = asyncHandler( // test logout for student
    async (req, res) => {
        if (!req.user){
            res.redirect('/student');
        }
        else{
            req.logout((err) =>{
            if (err){
                return next(err);
            }                
            else {
                res.render(viewpath + '/slogin', {
                    title: 'Student Login Test Page',
                    user: req.user,
                    message: 'log out successful!'
                });
            }
        });
        }
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
            password: await bcrypt.hash(req.body.password, 5)
        };
        await query.createNewStudent(tempStudent.username, tempStudent.password);
        res.redirect('/student/register');
});


module.exports = { 
    getStudentView, 
    postStudentLogin, 
    getStudentRegister, 
    postStudentRegister,
    getStudentHome,
    getStudentLogout
};