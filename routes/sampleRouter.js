const {Router} = require('express'); //destructure Router from express
const sampleRouter = Router();

const links = [
    {name: 'Home', url: '/'},
    {name: 'Teacher', url: '/teacher'},
    {name: 'Student', url: '/student'},
    {name: 'Sample', url: '/sample'},
    {name: 'ChatBoard', url: '/chat'},
]; // links for the navbar, all pages available is here

sampleRouter.get('/', (req, res) => {
    res.render('sample/sample', {
        title: 'Sample Page', 
        message: 'This is a sample page',
        links: links
    });
}); // sample serves as an index page

module.exports = sampleRouter;