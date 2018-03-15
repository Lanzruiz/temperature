import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import { Tenant } from '../tenant';

@Injectable()
export class TenantService {

  constructor( private http: Http,
               private location: Location 
              ) { }

  	login() {
  		return true;
  	}
	getTenants() {
      console.log(location);
	    return this.http.get(`http://localhost:9000/api/tenant/list/04958slhskj09eu45ortetret5^53dssdf3esfsfsdfsdf`)
	    .map((res:Response) => res.json());
    }

    createTenant(tenant:Tenant) {
    	this.http.post('http://localhost:9000/api/createTenant',tenant);
    }

	updateTenant(tenant:Tenant) {
		this.http.put('http://localhost:9000/api/updateTenant',tenant);
	}

	deleteTenant(id) {
    	this.http.delete('http://localhost:9000/api/tenant/delete/'+id);
    }
}
