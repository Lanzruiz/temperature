import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Tenant } from './tenant';

@Injectable()
export class TenantService {

  constructor( private http: Http ) { }

  	login() {
  		return true;
  	}
	getTenants() {
	    return this.http.get(`http://localhost:9000/api/tenant/list/04958slhskj09eu45ortetret5^53dssdf3esfsfsdfsdf`)
	    .map((res:Response) => res.json());
    }

    createTenant(tenant:Tenant) {
    	this.http.post('http://localhost:9000/api/createTenant',tenant);
    }

	updateTenant(tenant:Tenant) {
		this.http.put('http://localhost:9000/api/updateTenant',tenant);
	}

	deleteTenant() {
    	this.http.delete('http://localhost:9000/api/deleteTenant');
    }
}
