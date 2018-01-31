import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddTenantPage } from '../tenants/add/index';

@Component({
  selector: 'page-tenants',
  templateUrl: 'index.html'
})
export class TenantsPage {

  members: any;

  members_list = [
    {
      name: 'Warwick',
      email: 'info@warwick.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'red'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'yellow'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'green'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'green'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'red'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'yellow'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'red'
    },
    {
      name: 'Worcesster College',
      email: 'info@worcessterollege.com',
      version: '3.0.1555',
      size: '32mb',
      color: 'blue'
    }
  ];

  shouldShowControls: boolean;
  listIndex: number;

  constructor(public navCtrl: NavController) {
    this.members = this.members_list;
  }

  showControls(key){

    this.shouldShowControls = this.shouldShowControls === true ? false : true;

    this.listIndex = key;
  }


  addTenant(){
    this.navCtrl.push(AddTenantPage);
  }

}
