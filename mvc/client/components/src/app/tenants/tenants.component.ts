import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant.service';
import { Tenant } from '../tenant';
@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {


  selectedTenant: Tenant;

  tenants: Tenant[];

  tenantsHeader: [ {header:'Company Legal Name'},{ header: 'Email'}];

  constructor(private tenantService: TenantService) { }

  ngOnInit() {
  	this.getTenants();
  }


  getTenants(): void {
  console.log('----');
    this.tenantService.getTenants()
        .subscribe(
        (res: any) => {
          this.tenants = res; 
        },
        error => {
          alert("ERROR");
        });

  }

  backup(): void {

  }

  restore(): void {

  }

  edit(): void {

  }

  onDeleteClick(tenant: Tenant): void {
  	if(window.confirm('Are sure you want to delete this item ?')){
    	//put your delete method logic headeralert(tenant._id);e
    	alert(tenant._id);
   	}
  	
  }

  onBackupClick(tenant: Tenant): void {
  	alert(tenant._id);
  }

  onSelect(tenant: Tenant): void {
	this.selectedTenant = tenant;
  }
}
