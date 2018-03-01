
var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
//var userModel = require('../models/user');
var tenantModel = require('../models/tenant');
var MongoClient = require('mongodb').MongoClient;

var database = require('../../config/database')
var auth = require('../../config/auth')
var mongolib = require('../../lib/mongoose')
var password = require('../../lib/password')
var bcrypt = require('../../lib/bcrypt')
var mongoose = require('mongoose');
var pgtools = require('../../lib/pgtools');

module.exports = {
 
  add : function(req, res){

    if(req.body.access_token == auth.access_token) {

      var item = {
         email: req.body.email,
         firstname: req.body.firstname,
         middlename: req.body.middlename,
         lastname: req.body.lastname,
         password: req.body.password,
         database: req.body.company,
         dbpassword: password.password,
         company: req.body.company,
         subdomain: req.body.subdomain.replace(/\s/g, '').toLowerCase(),
         role: 2
      }

      var tenant = {
          email: req.body.email,
          password: password.password,
          company: req.body.company,
          firstname: req.body.firstname,
          middlename: req.body.middlename,
          role: 1
      }

      var data = new tenantModel(item);
      data.save(function(err) {
        if (err) throw err;

        // fetch user and test password verification
        tenantModel.findOne({ email: req.body.email }, function(err, user) {
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
       
        dbo.collection("users").insertOne(tenant, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });

      console.log(bcrypt.hash);

      console.log('Data has been save!');
      res.status(200).send('data has been saved!');
    } else {
      res.status(403).send('Access Denied!');
    }  

  },

  restore: function(req, res) {

     var tenant = {
          email: req.body.email,
          password: password.password,
          company: req.body.company,
          firstname: req.body.firstname,
          middlename: req.body.middlename,
          role: 1
      }

  },

  delete: function(req, res) {

  },

  adduser: function(req, res) {
    var access = req.param("access_token");

    if(req.body.access_token == aut.access_token) {
 
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

    } else {
      res.status(403).send('Access Denied!');
    }
  },

  login: function(res){

  },

  list : function(req, res){

    var access = req.param("access_token");

    console.log("token from url "+access);
    console.log("token from auth " +auth.access_token);
    
    if( access == auth.access_token) {

      console.log(req.param("access_token"));

      tenantModel.find({role:2})
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

  backup: function(req, res){
 
      var id = req.param('id');
      tenantModel.findOne({ id: id}, function(err, tenant) {
            if (err) throw err;

            var tool = new pgtools();
            tool.dumpDatabase({
                host: 'localhost',
                port: 5432,
                user: 'postgres',
                password: 'postgres',
                dumpPath: 'public/Resource',
                database: tenant.companyName
            }, function (err, output, filePath) {
                if (err) throw err;
        
                console.log(output);
                console.log(filePath);

                ///SHOULD SEND EMAIL WITH FILE PATH HERE

                //return {filePath : filePath};
               // console.log(dumpFileName);
               
            });

      }

  }

}







