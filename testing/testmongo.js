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