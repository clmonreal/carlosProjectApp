import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login.interface';
import { ILoginResponse } from 'src/app/models/response.interface';
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

  constructor(private api:ApiService, private router:Router) { }

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
        let dataResponse: ILoginResponse = data;
        localStorage.setItem('token', dataResponse.token)
        this.router.navigate(['home']);
      },
      error: err => alert(err.error?.error)
    });
  }
}
