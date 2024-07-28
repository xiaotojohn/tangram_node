const express = require('express');
const passport = require('passport');
const studentRouter = express.Router();
const studentController = require('../controllers/studentController.js');

// passport.use(
//     new LocalStrategy( async (username, password, done) => {
//         const user = await query.getStudentByName(username);
//         if (user == null) {
//             return done(null, false, { message: 'No user with that username' });
//         }
//         try {
//             if (await bcrypt.compare(password, user.password)) {
//                 return done(null, user);
//             } else {
//                 return done(null, false, { message: 'Password incorrect' });
//             }
//         } catch (e) {
//             return done(e);
//         }
//     }
// ));

// passport.serializeUser((user, done) => done(null, user.id));

// passport.deserializeUser((id, done) => {
//     return done(null, query.getStudentById(id));
// });


studentRouter.use(express.urlencoded({extended: true})); //parse form data

studentRouter.get('/', studentController.getStudentView); //student main page
studentRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/studenthome',
    failureRedirect: '/',
    failureFlash: true
})); // student login
studentRouter.get('/register', studentController.getStudentRegister); // student register
studentRouter.post('/register', studentController.postStudentRegister); // student register

module.exports = studentRouter;