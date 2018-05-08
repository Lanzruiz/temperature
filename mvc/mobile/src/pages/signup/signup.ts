import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { User } from '../../providers/providers';
import { UploadphotoPage } from '../pages';
import { Signup2Page } from '../pages';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
 

  firstname: any;
  lastname: any;
  mobile: any;
  constructor(public navCtrl: NavController,
<<<<<<< HEAD
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, private http: Http, public navParams: NavParams) {
=======
    //public user: User,
   // public toastCtrl: ToastController,
    //public translateService: TranslateService, private http: Http) {
>>>>>>> MCP-395


  }

  doSignup() {

    //console.log(this.firstname);

   // this.navCtrl.push(Signup2Page, {fname: this.firstname, lname: this.lastname, mobile: this.mobile});

 

  }
 
}
