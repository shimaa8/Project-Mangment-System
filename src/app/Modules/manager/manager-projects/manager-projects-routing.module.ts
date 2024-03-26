import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerProjectsComponent } from './manager-projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';

const routes: Routes = [{ path: '', component: ManagerProjectsComponent },
{ path: 'add', component: AddEditProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerProjectsRoutingModule { }
