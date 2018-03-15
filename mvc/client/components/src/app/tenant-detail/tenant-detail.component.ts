import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { Tenant } from '../tenant';
import { ActivatedRoute } from '@angular/router';
import { TenantData } from '../providers/data/tenantData';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit,OnDestroy  {

  private sub: any;
  private tenant : Tenant ;
  
  ADD_ACTION = 0;
  EDIT_ACTION = 2;

  action : number;
  constructor(
    private route: ActivatedRoute,
    private tenatData:TenantData
    ) {
  	this.route.queryParams.subscribe(params => {
        console.log(this.tenatData.storage);
        this.tenant = this.tenatData.storage
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.action = 
       (params['id'] == undefined) ?
       this.ADD_ACTION : this.EDIT_ACTION;
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
