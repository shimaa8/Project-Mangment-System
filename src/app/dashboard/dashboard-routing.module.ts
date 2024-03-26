import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminGuard } from '../Guards/admin.guard';
import { UserGuard } from '../Guards/user.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '', component: DashboardComponent
  , children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'manager', canActivate: [AdminGuard], loadChildren: () => import('../Modules/manager/manager.module').then(m => m.ManagerModule) },
    { path: 'employee', canActivate: [UserGuard], loadChildren: () => import('../Modules/employee/employee.module').then(m => m.EmployeeModule) },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
