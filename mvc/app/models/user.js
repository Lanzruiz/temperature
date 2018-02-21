
var database = require('../../config/database')
var mongoose = require('mongoose');
mongoose.connect(database.url+database.db);
var Schema = mongoose.Schema;

var User =  new Schema({
	email: {type: String, required: true},
	firstname: String,
	middlename: String,
	lastname: String,
	password: String,
	role: Number,
	created_date: Date,
	updated_date: Date, 
	active_hash: String

});



module.exports = User;






