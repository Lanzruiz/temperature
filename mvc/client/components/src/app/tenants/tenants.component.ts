import { Component, OnInit } from '@angular/core';
import { TenantService } from '../providers/tenant.service';
import { TenantData } from '../providers/data/tenantData';
import { Tenant } from '../tenant';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  selectedTenant: Tenant;

  tenants: Tenant[];

  tenantsHeader: [ {header:'Company Legal Name'},{ header: 'Email'}];

  constructor(
    private router: Router,
    private tenantService: TenantService,
    private tenantData: TenantData
    ) { }

  ngOnInit() {
  	this.getTenants();  
  }


  getTenants(): void {
    // this.tenantService.getTenants()
    //     .subscribe(
    //     (res: any) => {
    //       this.tenants = res; 
    //     },
    //     error => {
    //       alert("ERROR");
    //     });

    this.tenants = [ {
      _id: '111',
       email: 'sample1@yahoo.com',
      password: 'sample1',
      database: 'db1',
      dbpassword: 'dbpassword',
      company: 'sampleComp1',
      subdomain: 'sample1.com',
      role: 2,
      contact : '0912321',
      address : '149 California blah blah',
      status : 'active'
    },
    {
      _id: '112',
       email: 'sample1@yahoo.com',
      password: 'sample1',
      database: 'db1',
      dbpassword: 'dbpassword',
      company: 'sampleComp1',
      subdomain: 'sample1.com',
      role: 2,
      contact : '0912321',
      address : '149 California blah blah',
       status : 'deactivated'
    },
    {
      _id: '113',
       email: 'sample1@yahoo.com',
      password: 'sample1',
      database: 'db1',
      dbpassword: 'dbpassword',
      company: 'sampleComp1',
      subdomain: 'sample1.com',
      role: 2,
      contact : '0912321',
      address : '149 California blah blah',
      status : 'deactivated'
    },
    {
      _id: '114',
       email: 'sample1@yahoo.com',
      password: 'sample1',
      database: 'db1',
      dbpassword: 'dbpassword',
      company: 'sampleComp1',
      subdomain: 'sample1.com',
      role: 2,
      contact : '0912321',
      address : '149 California blah blah',
       status : 'active'
    },
    {
      _id: '115',
       email: 'sample1@yahoo.com',
      password: 'sample1',
      database: 'db1',
      dbpassword: 'dbpassword',
      company: 'sampleComp1',
      subdomain: 'sample1.com',
      role: 2,
      contact : '0912321',
      address : '149 California blah blah',
       status : 'deactivated'
    }
 



    ];

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
