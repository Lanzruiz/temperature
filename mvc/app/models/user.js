var database = require('../../config/database')
var database = require('../../lib/mongoose')
var mongoclient = require('../../lib/mongodb')


class User {
	constructor(email,password,role,mobile,profilepic,firstname,lastname) {
	    this._email = email;
	    this._password = password;
	    this._role = role;
	    this._mobile = mobile;
	    this._profilepic = profilepic;
	    this._firstname = firstname;
	    this._lastname = lastname;
	    this._model = 'users';
		}

	add(permissions) {
		var myobj = { 
			email: this._email,
			password: this._password,
			role: this._role,
			mobile: this._mobile,
			profilepic: this._profilepic,
			firstname: this._firstname,
			lastname: this._lastname
		};	
		mongoclient.save(function(data) {
        	mongoclient.setPermissions(data.insertedId, permissions);
    	},myobj,this._model);
		
	}

	setPermission(id,permissions) {
		mongoclient.setPermissions(id,permissions);
	}

	find(id, callback) {
   		mongoclient.findById(function(userData) {
   			mongoclient.getPermissionByUserId(function(permissions) {
        	//	console.log(permissions);
        		var data = {
        			user : userData,
        			permissions : permissions
        		};
        		callback(data);
    		},id)
    	},id,this._model);
  	}

 	findAll(callback) {
	    mongoclient.findAll(function(data) {
	        callback(data);
	    },this._model);
  	}
}


module.exports = User;

