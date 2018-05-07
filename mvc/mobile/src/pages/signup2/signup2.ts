import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {

 
    fname: any;
    lnane: any;
    mobile: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

       this.fname = this.navParams.get('fname');
       this.lname = this.navParams.get('lname');
       this.mobile = this.navParams.get('mobile');          
    }

    ionViewDidLoad() {

       console.log('ionViewDidLoad Signup2Page');
    }

    doSignup() {

        let data = {

           firstname: this.fname,
           lastname:  this.lname,
           mobile:    this.mobile,
           email:     this.email,
           password:  this.password


        }

        this.http.post("http://127.0.0.1:9000/api/tenant/signup/", data).subscribe(data => {
	          if(data.status == 200){
	            this.navCtrl.push(TenantsPage);
	          }
          }, error => {
          console.log(error);// Error getting the data
        });


   }



}
