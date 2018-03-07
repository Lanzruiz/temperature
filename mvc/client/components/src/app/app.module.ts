import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantService } from './tenant.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    TenantListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
   TenantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
