import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TenantsComponent }      from './tenants/tenants.component';
import { LoginComponent }      from './login/login.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'update/:id', component:TenantDetailComponent},
  { path: 'create', component:TenantDetailComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
