import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Case } from '../../models/case';
import { Cases } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-case',
  templateUrl: 'case.html'
})
export class CasePage {
  currentItems: Case[];

  constructor(public navCtrl: NavController, public cases: Cases, public modalCtrl: ModalController) {
    this.currentItems = this.cases.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  toggleMenu() {
    document.getElementById("menu").style.display = "block";
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  settingClicked() {
    // let addModal = this.modalCtrl.create('ItemCreatePage');
    // addModal.onDidDismiss(item => {
    //   if (item) {
    //     this.items.add(item);
    //   }
    // })
    // addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(case) {
    this.cases.delete(case);
  }

  moreDisplay(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
 }

  /**
   * Navigate to the detail page for this item.
   */


}


