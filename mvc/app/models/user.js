var database = require('../../config/database')
var mongoose = require('mongoose');
mongoose.connect(database.url);
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
	created_date: Date,
	updated_date: Date, 
	active_hash: String

},{collection: 'users'});

UserDataSchema.pre('save', function(next) {
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
});

UserDataSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var UserData = mongoose.model('user', UserDataSchema);



module.exports = UserData;






