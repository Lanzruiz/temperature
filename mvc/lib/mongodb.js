var MongoClient = require('mongodb').MongoClient;
var database = require('../config/database')


class Mongo {

    connect(json) {

        MongoClient.connect(database.url, function(err, db) {

			   if (err) throw err;
			   var dbo = db.db("test");
			  
				   dbo.collection(collection).find({}).toArray(function(err, result) {
				      if (err) throw err;
				        res.json(result);
				        db.close();
				   });
			   
		});
    }

}


module.exports = Mongo;

