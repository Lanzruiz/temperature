import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPasswordPage } from './forgot-password/index';
import { SignupPage } from './signup/index';
import { TenantsPage } from '../tenants/index';

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  onForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  onLogin() {
    this.navCtrl.push(TenantsPage);
  }
}
