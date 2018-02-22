
var home = require('../app/controllers/home');
var user = require('../app/controllers/user');
//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/add', home.signup);
   
    //app.post('/api/signup', home.signup);//home
    //app.get('/', user.login);//home

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    //api
     app.post('/api/add', user.add);

     app.get('/api/list', user.list);//home


}
