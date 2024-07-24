const express = require('express');
const chatBoard = express.Router();

const messages = [
    {
      text: "Yes.",
      user: "Dexin",
      added: new Date()
    },
    {
      text: "But no.",
      user: "Dexin",
      added: new Date()
    }
  ];

chatBoard.use(express.urlencoded({extended: true}));

chatBoard.get('/', (req, res) => {
    res.render('chatBoard/chatBoard', {
        title: 'Chat Board',
        messages: messages
    });
});

chatBoard.post('/newmsg',  (req, res) => {
    console.log(req.body);
    const newMessage = {
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    };
    messages.push(newMessage);
    res.redirect('/chat');
});

module.exports = chatBoard;