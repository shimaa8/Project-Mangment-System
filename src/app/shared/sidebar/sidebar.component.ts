import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
interface Menu {
  text: string;
  link: string;
  icon: string;
  isActive: boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _AuthService: AuthService) { }

  isClosed: boolean = false;
  @Output() flagEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  sendFlag() {
    // const flag = true; // Replace with your flag variable
    this.isClosed = !this.isClosed
    this.flagEmitter.emit(this.isClosed);
  }
  isAdmin(): boolean {
    return this._AuthService.role == 'Manager' ? true : false;
  }
  isUser(): boolean {
    return this._AuthService.role == 'Employee' ? true : false;
  }
  Menu: Menu[] = [
    {
      text: 'home',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin() || this.isUser()
    },
    {
      text: 'users',
      link: '/dashboard/manager/users',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin()
    },
    {
      text: 'Projects',
      link: '/dashboard/manager/projects',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin()
    }
    ,
    {
      text: 'Tasks',
      link: '/dashboard/manager/tasks',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin()
    }
    ,
    {
      text: 'Projects',
      link: '/dashboard/employee/projects',
      icon: 'fa-solid fa-house',
      isActive: this.isUser()
    },
    {
      text: 'Task Board',
      link: '/dashboard/employee/task-board',
      icon: 'fa-solid fa-house',
      isActive: this.isUser()
    }
  ]


}
