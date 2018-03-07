import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TenantService {

  constructor( private http: Http ) { }


	getTenants() {
	    return this.http.get(`http://localhost:9000/api/tenant/list/04958slhskj09eu45ortetret5^53dssdf3esfsfsdfsdf`)
	    .map((res:Response) => res.json());
    }

    deleteTenant() {
    	this.http.delete(`http://localhost:9000/api/tenant/list/04958slhskj09eu45ortetret5^53dssdf3esfsfsdfsdf`);
    }

}
