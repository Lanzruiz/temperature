
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
var pgtools= require('pg-tools');
var fs = require('fs');
var pg = require('pg');
const fse = require('fs-extra');


module.exports = {
 
  add : function(req, res) {
    var tenant = new tenantModel(
          req.body.company, 
          req.body.subdomain.replace(/\s/g, '').toLowerCase(), 
          req.body.email, 
          req.body.contact, 
          req.body.address,
          req.body.password
    );

    if(req.body.access_token == auth.access_token) {
      if(tenant.find('company', req.body.company) != true) {

        tenant.add();

        res.status(200).send('data has been saved!');

      }else {
        res.status(302).send('duplicate!');
      }  

    } else {
      res.status(403).send('Access Denied!');
    }  
  },

  signup: function(req, res) {
    var tenant = new tenantModel(
          req.body.company, 
          req.body.subdomain, 
          req.body.email, 
          req.body.contact, 
          req.body.address,
          req.body.password
    );

    tenant.add();

    res.status(200).send('data has been saved!');

  },

  activate: function(req, res){
    if(req.body.access_token == auth.access_token) {

      var tenant = new tenantModel(
        req.body.company, 

      );

      tenant.activate();
      res.status(200).send('data has been activate!');

    } else {
      res.status(403).send('Access Denied!');
    }  
  },

  deactivate: function(req, res){
    if(req.body.access_token == auth.access_token) {

      var tenant = new tenantModel(
        req.body.company, 

      );

      tenant.deactivate();
      res.status(200).send('data has been deactivate!');

    } else {
      res.status(403).send('Access Denied!');
    }  
  },
  edit: function(req, res) {
    if(req.body.access_token == auth.access_token) {

      var tenant = new tenantModel(
        req.body.company, 
        req.body.subdomain.replace(/\s/g, '').toLowerCase(), 
        req.body.email, 
        req.body.contact, 
        req.body.address
      );

      //console.log(req.body.id);

      tenant.edit();
      res.status(200).send('data has been updated!');

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
     console.log('DELETE');
     res.status(200).send('data has been deleted!');
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

  login: function(req, res){



  },

  list : function(req, res){

    var access = req.param("access_token");

    console.log("token from url "+access);
    console.log("token from auth " +auth.access_token);
    
    if( access == auth.access_token) {
      var tenant = new tenantModel();
      console.log(req.param("access_token"));

      tenant.findAll(function(data) {
        res.status(200).send(data); 
      });
           

    } else {
      res.status(403).send('Access Denied!');
    }       

          
  },

	page : function(req, res){
 
      res.render('login.ejs');

  },
  backup: function(req, res){
 
      var id = req.param('id');
      var tenant = new tenantModel();
      tenant.findById(id, function(err, tenant) {
            if (err) throw err;

            var tool = new pgtools();
            tool.dumpDatabase({
                host: 'localhost',
                port: 5432,
                user: tenant.company,
                password: tenant.password,
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

  find(id, callback) {

    mongoclient.findAll(function(data) {
        callback(data);
    },this._model);
  }
  

}







