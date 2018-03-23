
var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');
var auth = require('../../config/auth')
var database = require('../../config/database')
var mongoose = require('mongoose');

module.exports = {
 
  add : function(req, res){

    var user = new userModel(
         req.body.email,
         req.body.password,
         req.body.role,
         req.body.mobile,
         req.body.profilePic,
         req.body.firstname,
         req.body.lastname,
    );
    if(req.body.access_token == auth.access_token) {

      //console.log(tenant.find('company', req.body.company));

      if(user.find('email', req.body.email) != true) {

        user.add([111,222,33]);

        res.status(200).send('data has been saved!');

      }else {
        res.status(302).send('duplicate!');
      }  

    } else {
      res.status(403).send('Access Denied!');
    } 

  },

  login: function(res){

  },

  permissionList : function(req, res){
    
  },

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







