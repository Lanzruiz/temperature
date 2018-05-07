<<<<<<< HEAD
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;    
MongoClient.connect('mongodb://monika:"clean6>soldier>Walk>>"@127.0.0.1:27017/admin',function(err, db){  
      if(err) 
        console.log(err);
      else
      {
        console.log('Mongo Conn....');

      }
    });
=======
var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  assert = require('assert');


  var user = encodeURIComponent('monika');
  var password = encodeURIComponent('clean6>soldier>Walk>>');
  var authMechanism = 'DEFAULT';

  var url = f('mongodb://%s:%s@monika-cloudplatform-ionic-qa.aptiture.com:27017/admin?authMechanism=%s', user, password, authMechanism);

  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
	 var dbo = db.db("monikadb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  });
>>>>>>> MCP-395
