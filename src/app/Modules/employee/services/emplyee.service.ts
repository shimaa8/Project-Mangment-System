import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {
  constructor(private _HttpClient: HttpClient) { }

  getAllProjects(param: any): Observable<any> {
    return this._HttpClient.get('Project/employee', { params: param })
  }

  getAllTasks(parms: any): Observable<any> {
    return this._HttpClient.get('Task', { params: parms })
  }

  // getTodoTasks(): Observable<any> {
  //   return this._HttpClient.get('Task', { params: { status: 'todo' } })
  // }
}
