import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeProjectsComponent } from './components/employee-projects/employee-projects.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'projects', component: EmployeeProjectsComponent },
  { path: 'task-board', component: EmployeeTasksComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
