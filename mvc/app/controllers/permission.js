var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
//var userModel = require('../models/user');
var tenantModel = require('../models/permission');
var MongoClient = require('mongodb').MongoClient;

var database = require('../../config/database')
var auth = require('../../config/auth')
var mongolib = require('../../lib/mongoose')
var password = require('../../lib/password')
var bcrypt = require('../../lib/bcrypt')
var mongoose = require('mongoose');
var pgtools = require('pgtools');
var fs = require('fs');
var pg = require('pg');
const fse = require('fs-extra');


module.exports = {
	list : function( req, res) {

	}
}
 