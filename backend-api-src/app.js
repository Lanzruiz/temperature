/**
 * app.js Main Configuration file
 * - This is the main configuration file that consist of server initialization, 
 * database initialization, CORS setup, & routes setup. This is the main entry point of 
 * NodeJS.
 * 
 * Author: JM Miguel
 * Date Created: 12192017
 * Project: Monika          
 */

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Controllers
const UserController = require('./endpoints/users/UserController');

const app = express();
const port = process.env.PORT || 3000; 
const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res, next){res.send(200, {message: 'Welcome to Monika API!'});});
app.use(UserController);

