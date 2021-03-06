import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CustomersComponent } from './components/pages/customers/customers.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full', data: {animation: 'DashboardPage'}},
  {path: 'customers', component: CustomersComponent, pathMatch: 'full', data: {animation: 'CustomersPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
