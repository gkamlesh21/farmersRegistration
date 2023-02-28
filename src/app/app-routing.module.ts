import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';

const accountModule = () => import('./module/account/account.module').then(x => x.AccountModule);
const farmersModule = () => import('./module/farmers/farmers.module').then(x => x.FarmersModule);
const employeeModule = () => import('./module/employee/employee.module').then(x => x.EmployeeModule);

const routes: Routes = [
  { path: '', loadChildren: accountModule },
  { path: 'home', component: HomeComponent },
  { path: 'farmers', loadChildren: farmersModule },
  { path: 'employee', loadChildren: employeeModule },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
