import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'index.html'
})
export class ForgotPasswordPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  onForgotPasswordSubmit() {
    let alert = this.alertCtrl.create({
      title: 'Password Reset Sent',
      subTitle: 'We have sent an email on how to reset your password.',
      buttons: ['Close']
    });
    alert.present();
  }

}
