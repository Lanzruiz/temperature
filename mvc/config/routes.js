
var home = require('../app/controllers/home');
var user = require('../app/controllers/user');
var tenant = require('../app/controllers/tenant');
//you can include all your controllers
var subdomain = require('express-subdomain');

module.exports = function (app, passport) {


    app.get('/', home.login);

    app.get('/signup', home.signup);

    app.get('/login', home.login);
    app.get('/tenants/list', home.tenantlist);
    app.get('/tenant/add', home.createnant);

   
    //app.post('/api/signup', home.signup);//home
    //app.get('/', user.login);//home
    app.post('/api/createTenants',home.createTenants);

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


    //main user api
    app.post('/api/user/add', user.add);
    app.get('/api/user/list/:access_token', user.list);
    app.get('/api/tenant/list/:access_token', tenant.list);
    app.post('/api/tenant/add', tenant.add);
    app.delete('/api/tenant/delete/:id',tenant.delete)
    app.get('/api/tenant/restore/:access_token', tenant.add);
    //app.post('/api/tenant/backup/:id', tenant.backup);

    //tenant api
    app.post('/api/tenant/adduser', tenant.adduser);
    app.get('/api/tenant/member/list/:id', user.list);

    app.use(subdomain('now', app));




}
