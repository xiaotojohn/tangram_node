const {Router} = require('express'); //destructure Router from express
const sampleRouter = Router();

const links = [
    {name: 'Home', url: '/'},
    {name: 'Teacher', url: '/teacher'},
    {name: 'Student', url: '/student'},
    {name: 'Sample', url: '/sample'},
    {name: 'ChatBoard', url: '/chat'},
];

sampleRouter.get('/', (req, res) => {
    res.render('sample/sample', {
        title: 'Sample Page', 
        message: 'This is a sample page',
        links: links
    });
});

module.exports = sampleRouter;