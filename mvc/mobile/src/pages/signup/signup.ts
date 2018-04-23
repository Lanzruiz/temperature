import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { User } from '../../providers/providers';
import { UploadphotoPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {

     let data = {
       username: 'staff@monika.com',
       password: 'enter123>run>child'
    }

    this.http.post("http://127.0.0.1:9000/api/staff/auth", data)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
    });

    // Attempt to login in through our User service
   // this.user.signup(this.account).subscribe((resp) => {
   //   this.navCtrl.push(UploadphotoPage);
  //  }, (err) => {

  //    this.navCtrl.push(UploadphotoPage);

      // Unable to sign up
 //     let toast = this.toastCtrl.create({
  //      message: this.signupErrorString,
 //       duration: 3000,
  //      position: 'top'
 //     });
 //     toast.present();
//   });
//  }
 }
}
