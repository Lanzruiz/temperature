var MongoClient = require('mongodb').MongoClient;
var database = require('../config/database')
var env = require('../env')

var ObjectId = require('mongodb').ObjectID;

switch (env.app_env) {
    case 'local':
        var url = database.url;
      break;

    case 'production':

          f = require('util').format,
          assert = require('assert');

		var user = encodeURIComponent(env.user);
		var pass = encodeURIComponent(env.pass);
		var authMechanism = 'DEFAULT';

		// Connection URL
		var url = f('mongodb://%s:%s@localhost:27017/admin?authMechanism=%s',
		  user, pass, authMechanism);

      break;  

}    


module.exports.save = function(callback, data,model) {

	MongoClient.connect(url, function(err, db) {
		
		console.log("Connected correctly to server");
        var dbo = db.db(env.database);
		var myobj = data;
		dbo.collection(model).insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");
		    callback(res);
		    db.close();
		});
   });

}	


module.exports.update = function(data,model) {

	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db(env.database);
		  var myquery = { company: data.company};
		  var newvalues = { $set: data };
		  dbo.collection(model).updateOne(myquery, newvalues, function(err, res) {
		    if (err) throw err;
		    console.log("1 document updated");
		    db.close();
		  });
    });

}	

module.exports.searchOne = function(data,model) {

    MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db(env.database);
		  var myquery = { data };
		  dbo.collection(model).find(myquery, function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    db.close();
		  });
    });
}

module.exports.findById = function(callback, id, model) {
    MongoClient.connect(url, function(err, db) {
		if (err) throw err;
			var dbo = db.db(env.database);
			var myquery = { '_id' : ObjectId(id)}; 
			dbo.collection(model).find(myquery).toArray(function(err, docs) {
			    console.log("Found the following records");
			    console.log(docs);
			    callback(docs);
		    });
    });
}

module.exports.findAll = function(callback,model) {
    MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db(env.database);
		  dbo.collection(model).find().toArray(function(err, result) {
		    if (err) throw err;
		    callback(result);
		  });
    });
}

module.exports.setPermissions = function(id,permissions) {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db(env.database);
		for(i = 0; i < permissions.length; i++) { 
			var myobj = {userid : id, permissionid : permissions[i] };
			dbo.collection('user_permissions').insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    console.log("1 document inserted");
			});
		}
	    db.close();
   });
}

module.exports.getPermissionByUserId = function(callback,id) {
    MongoClient.connect(url, function(err, db) {
		if (err) throw err;
			var dbo = db.db(env.database);
			var myquery = { 'userid' : ObjectId(id)}; 
			dbo.collection('user_permissions').find(myquery).toArray(function(err, docs) {
			    console.log("Found the following records");
			    console.log(docs);
			    callback(docs);
		    });
		});
}