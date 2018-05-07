var database = require('../config/database')
var env = require('../env')
var pg = require('pg');
const fse = require('fs-extra');



module.exports.addCase = function (user, password,company, data) {

	var conString = "postgres://"+user+":"+password+"@localhost:5432/"+company;

	var client = new pg.Client(conString);
	client.connect(function(err) {
		if(err) {
			return console.error('could not connect to postgres', err);
		}

		client.query("CREATE TABLE IF NOT EXISTS CASES (id SERIAL NOT NULL PRIMARY KEY, region_site varchar(450) NOT NULL, location_unit varchar(450) NOT NULL, case_desc text, assignee varchar(450), date_created timestamp NOT NULL, status integer NOT NULL DEFAULT '1', resolution integer NOT NULL DEFAULT '1')", 
			function(err, result) {
			if(err)
				return console.error('Create Database Error', err);
		    client.query('INSERT INTO CASES(region_site, location_unit, case_desc, date_created, status, resolution) values($1, $2 ,$3, to_timestamp($4), $5, $6)',
			[data.region_site
			, data.location_unit
			, data.case_desc
			, Date.now()
			, data.status
			, data.resolution]);
			});
	    client.on("error", function (err) {
	        console.log("DB insertion failed. Error Message: " + err, null);
	        return;
	    });
	});
}