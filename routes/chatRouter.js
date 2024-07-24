const express = require('express');
const chatRouter = express.Router();
const chatController = require('../controllers/chatController.js');


chatRouter.use(express.urlencoded({extended: true}));

chatRouter.get('/', chatController.getChatBoardViews);

chatRouter.post('/newmsg', chatController.postNewChat);

module.exports = chatRouter;