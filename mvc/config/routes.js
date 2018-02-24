
var home = require('../app/controllers/home');
var user = require('../app/controllers/user');
var tenant = require('../app/controllers/tenant');
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
    app.post('/api/user/add', user.add);
    app.get('/api/user/list/:id', user.list);
     
    app.post('/api/tenant/add', tenant.add);
    app.get('/api/tenant/list/:id', tenant.list);
    app.get('/api/tenant/member/list/:id', user.list);




}
