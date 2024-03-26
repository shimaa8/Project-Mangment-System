import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit {

  projectsTable: any;
  projects: any[] = [];
  constructor(private _ProjectService: ProjectService) { }
  ngOnInit(): void {
    this.getAllProjects();
  }
  getAllProjects() {
    let paramData = {
      pageSize: 10,
      pageNumber: 1
    }
    this._ProjectService.getAllProjects(paramData).subscribe({
      next: (res) => {
        console.log(res);

        this.projectsTable = res;
        this.projects = res.data

      }
    })
  }
}
