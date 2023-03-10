import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, ILoginResponse } from 'src/app/models/login.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  errorStatus:boolean = false;
  errorMessage:any = '';

  constructor(private api:ApiService, private auth:AuthService, private router:Router, private alerts:AlertsService) { }

  ngOnInit():void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }

  onLogin(form:ILogin) {
    this.auth.loginByEmail(form).subscribe({
      next: data => {
        this.alerts.showSuccess('Successfully logged in', 'Done!');
        let dataResponse: ILoginResponse = data;
        localStorage.setItem('token', dataResponse.token)
        this.router.navigate(['home']);
      },
      error: err => this.alerts.showError(err.error?.error, 'Error')
    });
  }
}
