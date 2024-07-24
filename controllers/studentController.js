const asyncHandler = require('express-async-handler');
const viewpath = 'userViews';

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


module.exports = { getStudentView, postStudentLogin };