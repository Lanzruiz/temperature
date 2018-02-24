
var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');

var database = require('../../config/database')
var mongoose = require('mongoose');

module.exports = {
 
  add : function(req, res){

    var item = {
       email: req.body.email,
       firstname: req.body.firstname,
       middlename: req.body.middlename,
       lastname: req.body.lastname,
       password: req.body.password,
       role: 2
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

  },

  login: function(res){

  },

  list : function(req, res){
    console.log(req.params.id);
    userModel.find()
         .then(function(doc){
            res.status(200).send(doc); 
         })
  },

	page : function(req, res){

      res.render('login.ejs');

  }
}







