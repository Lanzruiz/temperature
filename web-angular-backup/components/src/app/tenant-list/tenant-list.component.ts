import { Component, OnInit, Input } from '@angular/core';
import { Tenant } from '../tenant';



@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})


export class TenantListComponent implements OnInit {


  @Input() tenant: Tenant;
  constructor(
   
  ) {}


  ngOnInit() {
  }

}
