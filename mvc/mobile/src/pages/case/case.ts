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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    let cases = [
      {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      },
      {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      },
      {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      },
      {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      },
      {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      },
      {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      }
    ];

    // for (let item of cases) {
    //   currentItems.push(new Case(item));
    // }

    this.currentItems = cases;
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
 //  deleteItem(item) {
 //    this.cases.delete(item);
 //  }

 //  moreDisplay(id) {
 //    var x = document.getElementById(id);
 //    if (x.className.indexOf("w3-show") == -1) {
 //        x.className += " w3-show";
 //    } else { 
 //        x.className = x.className.replace(" w3-show", "");
 //    }
 // }

  /**
   * Navigate to the detail page for this item.
   */


}


