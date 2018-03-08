import { Component, OnInit,Input } from '@angular/core';
import { Tenant } from '../tenant';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {

  //@Input() tenant: Tenant;

  tenant : Tenant {company : '', subdomain:'',contact: '' , address:'', email :''};
  
  ADD_ACTION = 0;
  EDIT_ACTION = 2

  action : number;
  constructor() { }

  ngOnInit() {
  	this.action = this.ADD_ACTION; 
  }



}
