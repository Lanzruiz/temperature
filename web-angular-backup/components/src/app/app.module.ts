import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';


import { TenantService } from './providers/tenant.service';
import { TenantData } from './providers/data/tenantData';



@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    TenantListComponent,
    LoginComponent,
    TenantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
   TenantService,
   TenantData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
