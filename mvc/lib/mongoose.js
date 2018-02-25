var MongoClient = require('mongodb').MongoClient;
var database = require('../config/database')


module.exports.checkpassword = function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
}


module.exports.createtenant = function(req, res) {

	 var url = database.url+req.body.company;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });


    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(req.body.company);
      var myobj = {firstname: req.body.firstname, lastname: req.body.lastname, role: 1 };
      dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

}


