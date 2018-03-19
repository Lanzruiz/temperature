import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TenantsPage } from '../tenants/index';

@Component({
  selector: 'page-case',
  templateUrl: 'index.html'
})
export class CasePage {

  constructor(public navCtrl: NavController) {

  }

  onBackToTenantsPage(){
    this.navCtrl.push(TenantsPage);
  }
}
