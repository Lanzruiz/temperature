import { Component, OnInit,Input } from '@angular/core';
import { Tenant } from '../tenant';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {

  //@Input() tenant: Tenant;

  tenant : Tenant ;
  
  ADD_ACTION = 0;
  EDIT_ACTION = 2

  action : number;
  constructor() {
  	this.tenant = new Tenant();
  	this.tenant.company = '';
  	this.tenant.subdomain = '';
  	this.tenant.contact = '';
  	this.tenant.address = '';
  	this.tenant.email = '';
  }

  ngOnInit() {
  	this.action = this.ADD_ACTION; 
  }



}
