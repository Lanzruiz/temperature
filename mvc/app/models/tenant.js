var database = require('../../config/database')
var database = require('../../lib/mongoose')
var mongoclient = require('../../lib/mongodb')


class Tenant {
  
  constructor(company, subdomain, email, contact, address, password) {
    this._company = company;
    this._subdomain = subdomain;
    this._email = email;
    this._contact = contact;
    this._address = address;
    this._password = password;
    this._model = "tenants";
  }

  add() {

    var myobj = { 
        company: this._company, 
        subdomain: this._subdomain, 
        email: this._email, 
        contact: this._contact, 
        address: this._address,
        password: this._password,
        status: 0
    };

    mongoclient.save(myobj, this._model);
  }

  activate() {

    var myobj = { 
        company: this._company, 
        status: 1
    };

     mongoclient.update(myobj,this._model);
  }

  deactivate() {

    var myobj = { 
        company: this._company, 
        status: 0
    };

     mongoclient.update(myobj,this._model);
  }

  edit() {

    var myobj = { 
        company: this._company, 
        subdomain: this._subdomain, 
        email: this._email, 
        contact: this._contact, 
        address: this._address
    };

     mongoclient.update(myobj,this._model);
  }

  delete() {

  }
  
  findById(id, callback) {
      mongoclient.findById(function(data) {
            callback(data);
      },id,this._model);
  }
  find(element, data) {

     var headsup;

     switch (element) {

        case 'company':
            console.log(data);
            var myobj = { 
                company: data
            };
            headsup = mongoclient.searchOne(myobj,this._model);

            break;

        case 'subdomain':

            break;

        case 'email':

            break;



     }  

     return headsup;    
  }

  findAll(callback) {

    mongoclient.findAll(function(data) {
        callback(data);
    },this._model);
  }
}


module.exports = Tenant;






