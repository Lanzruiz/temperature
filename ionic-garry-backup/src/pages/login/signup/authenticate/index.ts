import { Component } from '@angular/core';
import { NavParams, AlertController, NavController } from 'ionic-angular';

import { TenantsPage } from '../../../tenants/index';

@Component({
  selector: 'screen-authentication',
  templateUrl: 'index.html'
})
export class SignupAuthenticationScreen {

  constructor(
      public params: NavParams,
      private alertCtrl: AlertController,
      private navCtrl: NavController
    ) {
    console.log('UserId', params.get('userId'));
  }

  onConfirmAuthenticate() {
    let alert = this.alertCtrl.create({
      title: 'Code Accepted',
      message: '2FA Code will expire after 30 Days',
      buttons: [
        {
          text: 'Continue',
          handler: () => {
            this.navCtrl.push(TenantsPage);
          }
        }
      ]
    });
    alert.present();
  }
}
