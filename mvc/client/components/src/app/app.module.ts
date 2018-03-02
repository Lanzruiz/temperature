import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    TenantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
