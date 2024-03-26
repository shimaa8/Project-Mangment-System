import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }

  getUsers(param: any): Observable<any> {
    return this._HttpClient.get('Users', { params: param })
  }

  // onAddProject(data: FormGroup): Observable<any> {
  //   return this._HttpClient.post('Project', data)
  // }
  getAllUsers(): Observable<any> {
    return this._HttpClient.get('Users', { params: { pageSize: 10000, PageNumber: 1, groups: 2 } })
  }

  onToggleActivateUser(id: number): Observable<any> {
    return this._HttpClient.put(`Users/${id}`, {})
  }
}
