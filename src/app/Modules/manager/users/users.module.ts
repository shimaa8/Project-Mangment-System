import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmBlockUserComponent } from './components/confirm-block-user/confirm-block-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ConfirmBlockUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule, SharedModule
  ]
})
export class UsersModule { }
