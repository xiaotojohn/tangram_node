const asyncHandler = require('express-async-handler');
const viewpath = 'userViews';

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


module.exports = { getTeacherView, postTeacherLogin };