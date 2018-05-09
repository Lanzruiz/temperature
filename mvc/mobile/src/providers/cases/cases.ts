import { Injectable } from '@angular/core';

import { Case } from '../../models/case';
import { Api } from '../api/api';

@Injectable()
export class Cases {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Case) {
  }

  delete(item: Case) {
  }

}
