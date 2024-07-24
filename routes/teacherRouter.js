const express = require('express');
const teacherRouter = express.Router();

teacherRouter.get('/', (req, res) => {
    res.send('teacher route accessed');
});

module.exports = teacherRouter;