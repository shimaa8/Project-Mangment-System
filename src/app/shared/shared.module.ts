import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModule,
    MatButtonModule, MatMenuModule, MatIconModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, ReactiveFormsModule
    , SidebarComponent, NavbarComponent, RouterModule, MatButtonModule, MatMenuModule, MatIconModule
  ],
  declarations: [SharedComponent, SidebarComponent, NavbarComponent]
})
export class SharedModule { }
