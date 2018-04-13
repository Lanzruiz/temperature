import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TenantsoldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tenantsold',
  templateUrl: 'tenantsold.html',
})
export class TenantsoldPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TenantsoldPage');
  }

  members: any;

  members_list = [
    {
      name: 'Warwick',
      email: 'info@warwick.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'pink'
    },
    {
      name: 'NHS Trust',
      email: 'info@nhstrust.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'darkblue'
    },
    {
      name: 'Monika',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'darkblue'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'pink'
    },
    {
      name: 'NHS Trust',
      email: 'info@nhstrust.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'pink'
    },
    {
      name: 'Warwick',
      email: 'info@warwick.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'pink'
    },
    {
      name: 'NHS Trust',
      email: 'info@nhstrust.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'darkblue'
    },
    {
      name: 'Monika',
      email: 'info@monika.com',
      version: '3.0.1555',
      size: '500mb',
      color: 'red'
    }
  ];

  shouldShowControls: boolean;
  listIndex: number;

  constructor(public navCtrl: NavController) {
    this.members = this.members_list;;
  }

  showControls(key){

    this.shouldShowControls = this.shouldShowControls === true ? false : true;

    this.listIndex = key;
  }


  onAddTenant(){
    this.navCtrl.push(AddTenantPage);
  }

  onEditTenant() {
    this.navCtrl.push(EditTenantPage);
  }


}
