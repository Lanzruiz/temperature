//var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
//var MongoClient = require('../../lib/mongodb')
var database = require('../../config/database')
const mongo = new MongoClient();

var collection;

class User {

    constructor(firstname, middlename, lastname, birthday ) {

    	this.firstname = firstname;
    	this.middlename = middlename;
    	this.lastname = lastname;
    	this.birthday = birthday;

    }

  

    getall(res) {
	  	MongoClient.connect(database.url, function(err, db) {

		    if (err) throw err;
		    var dbo = db.db("test");
				  
		    dbo.collection("Users").find({}).toArray(function(err, result) {
			    if (err) throw err;
			    res.json(result);
			    db.close();
		    });
				   
	    });
    }

    add(res, req) {

    	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("test");
		  var myobj = { name: "Company Inc", address: "Highway 37" };
		  dbo.collection("Users").insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");
		    db.close();
		  });
		});

    }

}

module.exports = User;






