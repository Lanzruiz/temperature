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
 


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, private http: Http) {


  }

  doSignup() {

    //console.log(this.firstname);

    this.navCtrl.push(Signup2Page, {fname: this.firstname, lname: this.lastname, mobile: this.mobile});

 

  }
 
}
