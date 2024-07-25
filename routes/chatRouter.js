const express = require('express');
const chatRouter = express.Router();
const chatController = require('../controllers/chatController.js');


chatRouter.use(express.urlencoded({extended: true})); //parse form data

chatRouter.get('/', chatController.getChatBoardViews); //chat main page

chatRouter.post('/newmsg', chatController.postNewChat); //post new message

module.exports = chatRouter;