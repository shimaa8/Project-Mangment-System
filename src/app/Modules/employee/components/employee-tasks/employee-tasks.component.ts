import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../../services/emplyee.service';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.scss']
})
export class EmployeeTasksComponent implements OnInit {
  todo: any[] = [];
  inProgress: any[] = [];
  done: any[] = [];
  taskData: any;
  taskList: any[] = [];

  constructor(private _EmplyeeService: EmplyeeService) { }

  ngOnInit(): void {
    this.getAllTasks()
  }


  getAllTasks() {
    let paramData = {
      pageSize: 10,
      pageNumber: 1
    }
    this._EmplyeeService.getAllTasks(paramData).subscribe({
      next: (res) => {
        console.log(res);

        this.taskData = res;
        this.taskList = res.data;


        this.todo = this.taskList.filter(x => x.status == 'ToDo');
        this.inProgress = this.taskList.filter(x => x.status == 'InProgress');
        this.done = this.taskList.filter(x => x.status == 'Done');



      }
    })
  }




  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    console.log(event.container.data);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
