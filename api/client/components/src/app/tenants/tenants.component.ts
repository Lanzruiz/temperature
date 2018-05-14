import { Component, OnInit } from '@angular/core';
import { TenantService } from '../providers/tenant.service';
import { TenantData } from '../providers/data/tenantData';
import { Status } from '../common/enums';
import { Tenant } from '../tenant';
import { Router, NavigationExtras } from '@angular/router';



enum AgentStatus {
    1 = "available" ,
    2 = "busy",
    3 = "away",
    4 = "offline"


}
@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  selectedTenant: Tenant;

  tenants: Tenant[];

  status: Status;

  x = 5;
  tenantsHeader: [ {header:'Company Legal Name'},{ header: 'Email'}];

  constructor(
    private router: Router,
    private tenantService: TenantService,
    private tenantData: TenantData,
    ) { }

  ngOnInit() {
    console.log(Status["1"];);
  	this.getTenants();  
  }


  getTenants(): void {
    this.tenantService.getTenants()
        .subscribe(
        (res: any) => {
          this.tenants = res;
          console.log(res); 
        },
        error => {
          alert("ERROR");
        });
  }

  backup(): void {

  }

  restore(): void {

  }

  toggleStatus(): void {

  }

  onCreateClick(): void {
    this.tenantData.storage = {
      email: '',
      password: '',
      database: '',
      dbpassword: '',
      company: '',
      subdomain: '',
      contact : '',
      address : '',
      status : ''
    };
    this.router.navigateByUrl('/create');
  }
  onDeleteClick(tenant: Tenant): void {
  	if(window.confirm('Are sure you want to delete this item ?')){
    	//put your delete method logic headeralert(tenant._id);
    	//alert(tenant._id);
      this.tenantService.deleteTenant(tenant._id);
   	}
  	
  }

  onEditClick(tenant: Tenant): void {
    this.tenantData.storage = tenant;
    this.router.navigate(['/update/'+tenant._id]);
  }

  onBackupClick(tenant: Tenant): void {
  	alert(tenant._id);
  }

  onSelect(tenant: Tenant): void {
	 //this.selectedTenant = tenant;
  }
}
