import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from '../../providers/providers';
import { AuthcodePage } from '../pages';
import { SignUpPage } from '../pages';
import { TenantsPage } from '../pages';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  

  // Our translated text strings
  private loginErrorString: string;

  username: any;
  password: any;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, public http: Http, private alertCtrl: AlertController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {

    let data = {
       email: this.username,
       password: this.password
    }

   console.log(this.password);

   this.http.post("http://127.0.0.1:9000/api/tenant/auth", data)
      .subscribe(data => {
        if(data.status == 200){
          this.navCtrl.push(TenantsPage);
        
        } else {
          
        }
      }, error => {
        console.log(error);// Error getting the data
    });

  // if(this.username == "staff@monika.com" && this.password == "enter123>run>child") {

   //   this.navCtrl.push(TenantsPage);

  // } else if(this.username == "owner@demo.com" && this.password == "enter123>run>child"){

  //    this.navCtrl.push(AuthcodePage);
  // }
 //  else {

 // }



  }
}
