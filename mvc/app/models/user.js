var database = require('../../config/database')
var database = require('../../lib/mongoose')
var mongoclient = require('../../lib/mongodb')


class User {
	constructor(email,password,role,mobile,profilepic,firstname,lastname) {
	    this._email = email;
	    this._password = password;
	    this._role = role;
	    this._mobile = mobile;
	    this._profilepic = profilepic;
	    this._firstname = firstname;
	    this._lastname = lastname;
	    this._model = 'users';
		}

	add(permissions) {

		var myobj = { 
			email: this._email,
			password: this._password,
			role: this._role,
			mobile: this._mobile,
			profilepic: this._profilepic,
			firstname: this._firstname,
			lastname: this._lastname
		};	
		console.log(this._model);
		mongoclient.save(myobj,this._model);
		//mongoclient.saveUserPermission(userid,permissions);
	}

	find(element, data) {

     var headsup;

     switch (element) {

        case 'company':
         
            break;

        case 'subdomain':

            break;

        case 'email':
   			console.log(data);
            var myobj = { 
                email: data
            };
            headsup = mongoclient.searchOne(myobj,this._model);

            break;



     }  

     return headsup;    
  }
}


module.exports = User;

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






