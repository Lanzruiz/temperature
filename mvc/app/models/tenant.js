var database = require('../../config/database')
var database = require('../../lib/mongoose')
var mongoclient = require('../../lib/mongodb')


class Tenant {

  constructor(company, subdomain, email, contact, address) {
    this._company = company;
    this._subdomain = subdomain;
    this._email = email;
    this._contact = contact;
    this._address = address;
  }

  add() {

    var myobj = { 
        company: this._company, 
        subdomain: this._subdomain, 
        email: this._email, 
        contact: this._contact, 
        address: this._address,
        status: 0
    };

    mongoclient.save(myobj);
  }

  activate() {

    var myobj = { 
        company: this._company, 
        status: 1
    };

     mongoclient.update(myobj);
  }

  deactivate() {

    var myobj = { 
        company: this._company, 
        status: 0
    };

     mongoclient.update(myobj);
  }

  edit() {

    var myobj = { 
        company: this._company, 
        subdomain: this._subdomain, 
        email: this._email, 
        contact: this._contact, 
        address: this._address
    };

     mongoclient.update(myobj);
  }

  delete() {

  }

  find(element, data) {

     var headsup;

     switch (element) {

        case 'company':
            console.log(data);
            var myobj = { 
                company: data
            };
            headsup = mongoclient.searchOne(myobj);

            break;

        case 'subdomain':

            break;

        case 'email':

            break;



     }  

     return headsup;    
  }

  findall() {

  }
}


module.exports = Tenant;






