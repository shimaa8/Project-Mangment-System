import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [{ path: '', component: ManagerComponent },
{ path: 'projects', loadChildren: () => import('./manager-projects/manager-projects.module').then(m => m.ManagerProjectsModule) },
{ path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
