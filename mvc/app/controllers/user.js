
var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');
var auth = require('../../config/auth')
var database = require('../../config/database')
var mongoose = require('mongoose');

module.exports = {
 
  add : function(req, res){

    if(req.body.access_token == auth.access_token) {

      var item = {
         email: req.body.email,
         firstname: req.body.firstname,
         middlename: req.body.middlename,
         lastname: req.body.lastname,
         password: req.body.password,
         mobile: req.body.mobile,
         profilePic: req.body.profilePic,
         role: 1
      }

      var data = new userModel(item);
      data.save(function(err) {
        if (err) throw err;

        // fetch user and test password verification
        userModel.findOne({ email: req.body.email }, function(err, user) {
            if (err) throw err;

            // test a matching password
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                console.log(req.body.password, isMatch); // -> Password123: true
            });

            
        });
      });
      console.log('Data has been save!');
      res.status(200).send('data has been saved!');
    } else {
      res.status(403).send('Access Denied!');
    }  

  },

  login: function(res){

  },

  permissionList : function(req, res){
    
  }

  list : function(req, res){
    var access = req.param("access_token");

    console.log("token from url "+access);
    console.log("token from auth " +auth.access_token);

    if( access == auth.access_token) {

      userModel.find()
           .then(function(doc){
              res.status(200).send(doc); 
           })
    } else {
      res.status(403).send('Access Denied!');
    } 

  },

	page : function(req, res){

      res.render('login.ejs');

  }
}







