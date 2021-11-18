const passport = require('passport');
const User = require('../models/Users');

module.exports = () => {
    passport.serializeUser((user, done) => {
        console.log('serialize', user, '++++++++');
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        console.log('deserialize');
        User.findByUserName(username)
        .then(user => {
            done(null,user);
        }).catch(err => {
            done(err, null);
        });
    });
};