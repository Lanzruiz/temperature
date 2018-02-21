var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var userModel = require('../models/user');

const user = new userModel("User");


class userController {

	page (name) {
  
        switch (name) {
            case "index":
               name = "login";
               break; 
            case "login":
               name = "login";
               break;
            case "signup":
               name = "signup";
               break; 
            default: 
               name = "index";
        }

        return name;


	}
}

var userpage = new userController();



module.exports = {

	home : function(req, res){

      res.render(userpage.page("index")+'.ejs');

    },

    login : function(req, res) {
	
   	  res.render('login.ejs');
    },

    signup : function(req, res) {
   
		res.render('signup.ejs');

    }
}







