import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'index.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController ) {

  }

  onGoBack() {
    this.navCtrl.popToRoot({ animate: true, animation: 'ios-transition' });
  }
}
