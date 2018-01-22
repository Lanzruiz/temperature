import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPasswordPage } from './forgot-password/index';
import { TenantsPage } from '../tenants/index';

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  onClickForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  onClickLogIn() {
    this.navCtrl.push(TenantsPage);
  }
}