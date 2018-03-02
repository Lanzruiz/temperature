import { Component, OnInit } from '@angular/core';
import { TENANTS } from '../mock-tenants';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedTenant: Tenant;

  tenants = TENANTS;

  onSelect(tenant: Tenant): void {
	this.selectedTenant = tenant;
  }
}
