// const express = require('express');
const asyncHandler = require('express-async-handler');
const query = require('../db/querys.js');

// const messages = [
//     {
//       text: "Yes.",
//       user: "Dexin",
//       added: new Date()
//     },
//     {
//       text: "But no.",
//       user: "Dexin",
//       added: new Date()
//     }
//   ];



const getChatBoardViews = asyncHandler(async (req, res) => {
    const messages = await query.getLatestChats();
    res.render('chatBoard/chatBoard', {
        title: 'Chat Board',
        messages: messages
    });
});

const postNewChat = asyncHandler(async (req, res) => {
    console.log(req.body);
    const newMessage = {
        text: req.body.text,
        user: req.body.user,
    };
    await query.createNewChat(newMessage.user, newMessage.text);
    res.redirect('/chat');
});



module.exports = { getChatBoardViews, postNewChat };