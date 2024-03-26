import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string | any = '';
  constructor(private _HttpClient: HttpClient, private _Router: Router) {

    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();

    }
  }



  getProfile() {

    let endoded: any = localStorage.getItem('userToken');
    console.log(endoded);

    let decoded: any = jwtDecode(endoded);
    localStorage.setItem('userRole', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);

    console.log(decoded);
    this.getRole()

  }

  getRole() {
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('userRole') !== null) {
      this.role = localStorage.getItem('userRole')
    }
  }
  login(data: FormGroup): Observable<any> {
    return this._HttpClient.post('Users/Login', data)
  }
  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    this._Router.navigate(['/auth'])
  }
}



