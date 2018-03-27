import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, NavParams } from 'ionic-angular';

import { SignupAuthenticationScreen } from './authenticate/index';

@Component({
  selector: 'page-signup',
  templateUrl: 'index.html'
})
export class SignupPage {

  constructor(
      public navCtrl: NavController,
      private alertCtrl: AlertController,
      public modalCtrl: ModalController
    ) {

  }

  onGoBack() {
    this.navCtrl.popToRoot({ animate: true, animation: 'ios-transition' });
  }

  onAddProfile() {
    let alert = this.alertCtrl.create({
      title: 'You\'re good to go',
      message: 'Your new account has already made. Please check you email',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            let profileModal = this.modalCtrl.create(SignupAuthenticationScreen, { userId: 8675309 });
            profileModal.present();
          }
        }
      ]
    });
    alert.present();
  }

}
