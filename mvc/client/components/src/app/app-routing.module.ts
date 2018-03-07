import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TenantsComponent }      from './tenants/tenants.component';
import { LoginComponent }      from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tenants', component: TenantsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
