import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComingPage } from '../pages';
import { CasePage } from '../pages';

/**
 * Generated class for the Menuv2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuv2',
  templateUrl: 'menuv2.html',
})
export class Menuv2Page {

  items = [
    {name:'Dashboard', component: 'ComingPage'},
    {name:'Sites', component: 'SitesPage'},
    {name:'Cases', component: 'CasePage'},
    {name:'Reports', component: 'ReportsPage'},
    {name:'Graphs', component: 'GraphsPage'},
    {name:'Tenants', component: 'TenantsPage'},
    {name:'Users', component: 'UsersPage'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menuv2Page');
  }

  itemSelected(item: string) {
    console.log("Selected Item", item.component);
    this.navCtrl.push(item.component);
  }

}
