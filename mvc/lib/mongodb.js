var MongoClient = require('mongodb').MongoClient;
var database = require('../config/database')
var env = require('../env')
var ObjectId = require('mongodb').ObjectID;
var pgtools = require('pgtools');
var fs = require('fs');
var pg = require('pg');
const fse = require('fs-extra');


 const config = {
        user: 'postgres',
        password: 'root',
        port: 5433,
        host: 'localhost'
      }

switch (env.app_env) {
    case 'local':
        var url = database.url;
      break;

    case 'production':

          f = require('util').format,
          assert = require('assert');

		var user = encodeURIComponent(database.user);
		var pass = encodeURIComponent(database.pass);
		var authMechanism = 'DEFAULT';

		// Connection URL
		var url = f('mongodb://%s:%s@'+database.url+':27017/admin?authMechanism=%s',
		  user, pass, authMechanism);

      break;  

}

module.exports.loadPermissions = function(){
	MongoClient.connect(url, function(err, db) {
		fs = require('fs');
		readline = require('readline');
 		var dbo = db.db(env.database);

		var rl = readline.createInterface({
	      input : fs.createReadStream('./sql/permissions.txt'),
	      output: process.stdout,
	      terminal: false
		})
		var permissions = [];
		rl.on('line',function(line){
			try{
				var splitter = line.split(',');
				var myobj = {name : splitter[0], hasTenant : splitter[1], hasSite : splitter[2] }
				dbo.collection('permissions').insertOne(myobj);
            }
            catch (err){
                console.log(err);
            }
		})

		rl.on('close',function(){
            db.close();
            console.log('***************completed');
        });
	});
}    

//module.exports.save = function(callback, data, model) {
module.exports.save = function(data, model) {
	console.log('---------------');
	MongoClient.connect(url, function(err, db) {
		
		console.log("Connected correctly to server");
        var dbo = db.db(env.database);
		var myobj = data;
		dbo.collection(model).insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");

			createTenantDb(data.company,data.password);
		    //pgtools.createdb(config, data.company, function (err, res) {
        if (err) {
          //console.error(err);
          process.exit(-1);
        }

       });

  //     console.log('ssssssssssssssssssssssssss');
  //     var stream = fs.createWriteStream("sql/role.sql");
  //     stream.once('open', function(fd) {
  //     stream.write("CREATE DATABASE"+data.company)
  //     stream.write("CREATE USER "+data.company+" WITH PASSWORD '"+data.password+"';");
  //     stream.write("grant all privileges on "+data.company+" to "+data.company+";");

  //       //stream.write("My second row\n");
  //       //stream.end();


  //     var sql = fs.readFileSync('sql/role.sql').toString();

  //     //var sql = 'CREATE USER'

	 //      pg.connect('postgres://postgres:Bounce1234@localhost:5433/postgres', function(err, client, done){
	 //          if(err){
	 //              console.log('error: ', err);
	             
	 //          }
	 //          client.query(sql, function(err, result){
	 //              done();
	 //              if(err){
	 //                  console.log('error: ', err);
	                 
	 //              }
	              
	 //          });
	 //      });
  //     });
		//     db.close();
		// });
   });

}	

createTenantDb = function (company, password) {

	var conString = 'postgres://postgres:root@localhost:5432/postgres';

	var client = new pg.Client(conString);
	client.connect(function(err) {
		if(err) {
			return console.error('could not connect to postgres', err);
		}
	    client.query({
	    text: "CREATE DATABASE "+company,
	    name: "createDBQuery"
	    });

	    client.query({
	    text: "CREATE USER "+company+" WITH PASSWORD '"+password+"'",
	    name: "createUserQuery"
	    });

	    client.query({
	    text: "GRANT ALL PRIVILEGES ON "+company+" TO "+company,
	    name: "setPrevileges"
	    });


	    client.on("error", function (err) {
	        console.log("DB insertion failed. Error Message: " + err, null);
	        return;
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

module.exports.drop = function(callback,model) {
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(env.database);
	  dbo.collection(model).drop(function(err, delOK) {
	    if (err) throw err;
	    callback(delOK);
	    db.close();
	  });
	});
}


module.exports.deletePermissionByUserId = function(callback,id) {
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(env.database);
	  var myquery = {userid : id};
	  console.log(myquery);
	  dbo.collection('user_permissions').deleteMany(myquery, function(err, obj) {
	    if (err) throw err;
	    console.log(obj.result.n + " document(s) deleted");
	    callback();
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
			var myquery = { 'userid' : id}; 
			dbo.collection('user_permissions').find(myquery).toArray(function(err, docs) {
			    console.log("Found the following permissions");
			    console.log(docs);
			    callback(docs);
		    });
		});
}