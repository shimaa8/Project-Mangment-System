import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  })

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  onLogin(data: FormGroup) {
    console.log(data.value);
    this._AuthService.login(data.value).subscribe({
      next: (res) => {
        console.log(res);

        localStorage.setItem('userToken', res.token);

        this._AuthService.getProfile();
      }, error: () => {

      }, complete: () => {
        this._Router.navigate(['/dashboard'])
      }
    })

  }
}
