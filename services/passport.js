const passport = require('passport');
const User = require('../models/Users');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        User.findByUserName(username)
        .then(user => {
            done(null,user);
        }).catch(err => {
            done(err, null);
        });
    });
};