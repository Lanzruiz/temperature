var database = require('../../config/database')
var database = require('../../lib/mongoose')
var mongoose = require('mongoose');
mongoose.connect(database.url+database.db);
var Schema = mongoose.Schema;
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;


var UserDataSchema =  new Schema({
    email: {type: String, required: true},
    firstname: String,
    middlename: String,
    lastname: String,
    password: String,
    role: Number,
    company: String,
    subdomain: String,
    database: String,
    dbpassword: String,
    created_date: Date,
    updated_date: Date, 
    active_hash: String,
    tenant: String

},{collection: 'users'});

UserDataSchema.pre('save', database.checkpassword);

UserDataSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


var UserData = mongoose.model('tenant', UserDataSchema);



module.exports = UserData;






