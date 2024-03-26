import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeProjectsComponent } from './components/employee-projects/employee-projects.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeProjectsComponent,
    EmployeeTasksComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    DragDropModule
  ]
})
export class EmployeeModule { }
