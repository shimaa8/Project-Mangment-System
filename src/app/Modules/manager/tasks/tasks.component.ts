import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  taskTable: any;
  tasks: any[] = [];
  constructor(private _TasksService: TasksService) { }
  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks() {
    let paramData = {
      pageSize: 10,
      pageNumber: 1
    }
    this._TasksService.getManagerTasks(paramData).subscribe({
      next: (res) => {
        console.log(res);

        this.taskTable = res;
        this.tasks = res.data

      }
    })
  }
}
