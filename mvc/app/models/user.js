var database = require('../../config/database')
var database = require('../../lib/mongoose')
var mongoclient = require('../../lib/mongodb')


class User {
	constructor(email,password,role,mobile,profilepic,firstname,lastname) {
	    this.email = email;
	    this.password = password;
	    this.role = role;
	    this.mobile = mobile;
	    this.profilepic = profilepic;
	    this.firstname = firstname;
	    this.lastname = lastname;
  	}

	add(permissions) {

    	var myobj = { 
    		email = this.email,
    		password = this.password,
    		role = this.role,
    		mobile = this.mobile,
    		profilepic = this.profilepic,
    		firstname = this.firstname;
    		lastname = this.lastname;
    	};	

    mongoclient.save(myobj);
    mongoclient.saveUserPermission(userid,permissions);
  }
}


// var UserDataSchema =  new Schema({
// 	email: {type: String, required: true},
// 	firstname: String,
// 	middlename: String,
// 	lastname: String,
// 	password: String,
// 	role: Number,
// 	company: String,
// 	created_date: Date,
// 	updated_date: Date, 
// 	active_hash: String,
// 	tenant: String

// },{collection: 'users'});

// UserDataSchema.pre('save', database.checkpassword);

// UserDataSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };


// var UserData = mongoose.model('user', UserDataSchema);



// module.exports = UserData;






