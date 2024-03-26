import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { UsersService } from '../../../users/services/users.service';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {
  projects: any[] = [];
  users: any[] = [];
  constructor(private _ProjectService: ProjectService, private _Router: Router, private _UsersService: UsersService, private _TasksService: TasksService) { }
  ngOnInit(): void {
    this.getListManagerProjects();
    this.getListUsers();
  }
  taskForm = new FormGroup({
    title: new FormControl(null),
    description: new FormControl(null),
    employeeId: new FormControl(null),
    projectId: new FormControl(null),
  })
  onSubmit(data: FormGroup) {
    console.log(data.value);
    this._TasksService.onAddTask(data.value).subscribe({
      next: (res) => {
        console.log(res);

      }, error: () => {

      }, complete: () => {
        this._Router.navigate(['/dashboard/manager/tasks'])
      }
    })
  }

  getListManagerProjects() {
    this._ProjectService.getManagerProjects().subscribe({
      next: (res) => {
        console.log(res);
        this.projects = res.data

      }
    })
  }
  getListUsers() {
    this._UsersService.getAllUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res.data

      }
    })
  }
}
