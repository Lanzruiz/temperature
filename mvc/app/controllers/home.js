var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');
var constant = require('../../config/constants')
//var trim = require('trim-character');

exports.loggedIn = function(req, res, next)
{
	if (req.session.user) { // req.session.passport._id

		next();

	} else {

		res.redirect('/login');

	}

}

exports.list = function(req, res) {

   //console.log(req.body.)
   user.getall(res);


}

exports.home = function(req, res) {


	// console.log(trim(req.hostname, '.'+constant.base_url))
	
	res.render('login.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
	
	 });
	 
}


exports.signup = function(req, res) {


	res.render('signup.ejs');

}

exports.createTenants = function(req, res) {

    res.render('tenants/createTenants.ejs');

}

exports.login = function(req, res) {


    //console.log(trim(req.hostname, '.'+constant.base_url))

	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}


    
