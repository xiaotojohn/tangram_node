const asyncHandler = require('express-async-handler');
const viewpath = 'userViews';
const query = require('../db/querys.js');
const jsonHandlers = require('../models/jsonHandlers.js');
const { json } = require('body-parser');

var tempTeacher = {
    username: 'Rhaenyra',
    password: 'Targaryen'
};

const getTeacherView = asyncHandler(
    async (req, res) => {
        res.render(viewpath + '/tlogin', {
            title: 'Teacher Login Test Page',
            userInfo: tempTeacher
        });
});

const postTeacherLogin = asyncHandler(
    async (req, res) => {
        console.log(req.body);
        tempTeacher = {
            username: req.body.username,
            password: req.body.password
        };
        res.redirect('/teacher');
});

const getTeacherRegister = asyncHandler( // generating test register page for teacher
    async (req, res) => {
        allTeachers = await query.getAllTeachers();
        // console.log(allTeachers);
        res.render('userViews/tregister', {
            title: 'Teacher Register Test Page',
            userInfo: allTeachers
        });
});

const postTeacherRegister = asyncHandler( // test register for teacher, will return all registered teachers
    async (req, res) => {
        // console.log('here we are !!!!!! at postTeacherRegister');
        // console.log(req.body);
        tempTeacher = {
            username: req.body.username,
            password: req.body.password
        };
        await query.createNewTeacher(tempTeacher.username, tempTeacher.password);
        res.redirect('/teacher/register');
});

const getTeacherSchedule = asyncHandler(
    async (req, res) => {
        const schedule = await jsonHandlers.scheduleWeekFormatter(
            await query.getWeekSchedule());

        console.log(schedule);
        res.json(schedule);
});

module.exports = { getTeacherView, postTeacherLogin, getTeacherRegister, postTeacherRegister, getTeacherSchedule };