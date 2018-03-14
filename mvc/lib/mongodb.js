var MongoClient = require('mongodb').MongoClient;
var database = require('../config/database')
var env = require('../env')



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


module.exports.save = function(data) {

	MongoClient.connect(url, function(err, db) {
		
		console.log("Connected correctly to server");
        var dbo = db.db(env.database);
		var myobj = data;
		dbo.collection("users").insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");
		    db.close();
		});
   });

}	


module.exports.update = function(data) {

	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  //console.log(id);
		  var dbo = db.db(env.database);
		  var myquery = { company: data.company};
		  var newvalues = { $set: data };
		  dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
		    if (err) throw err;
		    console.log("1 document updated");
		    db.close();
		  });
    });

}	

module.exports.searchOne = function(data) {

    MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db(env.database);
		  var myquery = { data };
		  dbo.collection("users").find(myquery, function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    db.close();
		  });
    });
}
