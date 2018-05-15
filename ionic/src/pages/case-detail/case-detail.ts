import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Case } from '../../models/case';

@IonicPage()
@Component({
  selector: 'page-case-detail',
  templateUrl: 'case-detail.html'
})
export class CaseDetailPage {
  //currentItems: Case[];
  item : Case;
  constructor(public navParams: NavParams,public navCtrl: NavController, public modalCtrl: ModalController) {
    

    this.item =navParams.get('case');
    this.item =  {
        "region_site": "VIC Metro - 60 Elizabeth Street",
        "location_unit": "Kitchen Freezer",
        "case_desc": "(-13.8°C)Temperature too High",
        "date_created": "2015-12-25",
        "status": "Created",
        "resolution": "Unresolved",
        "asignee": "John Gamble"
      };
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

 
  editCase() {

  }


}


