const express = require('express');

const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
    res.send('student route accessed');
});

module.exports = studentRouter;