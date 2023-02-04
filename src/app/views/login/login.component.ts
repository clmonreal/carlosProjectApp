import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login.interface';
import { ILoginResponse } from 'src/app/models/response.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

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

  constructor(private api:ApiService, private router:Router, private alerts:AlertsService) { }

  ngOnInit():void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }

  onLogin(form:ILogin) {
    this.api.loginByEmail(form).subscribe({
      next: data => {
        this.alerts.showSuccess('Successfully logged in', 'Done');
        let dataResponse: ILoginResponse = data;
        localStorage.setItem('token', dataResponse.token)
        this.router.navigate(['home']);
      },
      error: err => this.alerts.showError(err.error?.error, 'Error')
    });
  }
}
