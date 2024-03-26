import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../../services/emplyee.service';

@Component({
  selector: 'app-employee-projects',
  templateUrl: './employee-projects.component.html',
  styleUrls: ['./employee-projects.component.scss']
})
export class EmployeeProjectsComponent implements OnInit {

  projectsTable: any;
  projects: any[] = [];
  constructor(private _EmplyeeService: EmplyeeService) { }
  ngOnInit(): void {
    this.getAllProjects();
  }
  getAllProjects() {
    let paramData = {
      pageSize: 10,
      pageNumber: 1
    }
    this._EmplyeeService.getAllProjects(paramData).subscribe({
      next: (res) => {
        console.log(res);

        this.projectsTable = res;
        this.projects = res.data

      }
    })
  }
}
