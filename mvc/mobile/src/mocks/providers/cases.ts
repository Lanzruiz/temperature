import { Injectable } from '@angular/core';

import { Case } from '../../models/case';

@Injectable()
export class Cases {
  cases: Case[] = [];

  defaultCase: any = {
    "region_site": "VIC Metro - 60 Elizabeth Street",
    "location_unit": "Kitchen Freezer",
    "case_desc": "(-13.8°C)Temperature too High",
    "date_created": "2015-12-25",
    "status": "Created",
    "resolution": "Unresolved",
    "asignee": "John Gamble",
  };


  constructor() {
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

    for (let case of cases) {
      this.cases.push(new Case(case));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.cases;
    }

    return this.cases.filter((case) => {
      for (let key in params) {
        let field = case[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return case;
        } else if (field == params[key]) {
          return case;
        }
      }
      return null;
    });
  }

  add(case: Case) {
    this.cases.push(case);
  }

  delete(case: Case) {
    this.cases.splice(this.cases.indexOf(case), 1);
  }
}
