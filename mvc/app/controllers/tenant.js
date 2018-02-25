
var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');
var MongoClient = require('mongodb').MongoClient;

var database = require('../../config/database')
var mongolib = require('../../lib/mongoose')
var mongoose = require('mongoose');

module.exports = {
 
  add : function(req, res){

    var item = {
       email: req.body.email,
       firstname: req.body.firstname,
       middlename: req.body.middlename,
       lastname: req.body.lastname,
       password: req.body.password,
       company: req.body.company,
       role: 2
    }

    var tenant = {
        email: req.body.email,
        password: req.body.password,
        company: req.body.company,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
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
    
    var url = database.url+req.body.company;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(req.body.company);
      var myobj = {firstname: req.body.firstname, lastname: req.body.lastname, role: 1 };
      dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

    console.log('Data has been save!');
    res.status(200).send('data has been saved!');

  },

  adduser: function(req, res) {
 
    var url = database.url+req.body.company;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(req.body.company);
      var myobj = {firstname: req.body.firstname, lastname: req.body.lastname, role: 2 };
      dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

    console.log('Data has been save!');
    res.status(200).send('data has been saved!');
  },

  login: function(res){

  },

  list : function(req, res){
    console.log(req.params.id);
    userModel.find({role:2})
         .then(function(doc){
            res.status(200).send(doc); 
         })
  },

	page : function(req, res){

      res.render('login.ejs');

  }
}







