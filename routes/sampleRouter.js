const {Router} = require('express'); //destructure Router from express
const sampleRouter = Router();

sampleRouter.get('/', (req, res) => {
    res.send('sample route accessed');
});

module.exports = sampleRouter;