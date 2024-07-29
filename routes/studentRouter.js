const express = require('express');
const studentRouter = express.Router();
const studentController = require('../controllers/studentController.js');
const query = require('../db/querys.js');

// // essentials for authentication
const session = require('express-session'); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// studentRouter.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
// studentRouter.use(passport.session());
// app.use(express.urlencoded({ extended: false }));

passport.use(
    new LocalStrategy( async (username, password, done) => {
        const user = await query.getStudentByName(username);
        if (user == null) {
            return done(null, false, { message: 'No user with that username' });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    }
));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    return done(null, query.getStudentById(id));
});


studentRouter.use(express.urlencoded({extended: true})); //parse form data

studentRouter.get('/', studentController.getStudentView); //student login page
studentRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/student/studenthome',
    failureRedirect: '/student',
    failureFlash: true
})); // student login method

studentRouter.get('/studenthome', studentController.getStudentHome); // student home page
studentRouter.get('/logout', studentController.getStudentLogout); // student logout
studentRouter.get('/register', studentController.getStudentRegister); // student register
studentRouter.post('/register', studentController.postStudentRegister); // student register

module.exports = studentRouter;