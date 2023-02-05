import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/login.interface';
import { ILoginResponse } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiPath:string = 'https://reqres.in/api/';

  constructor(private http:HttpClient) { }

  loginByEmail(form:ILogin):Observable<ILoginResponse> {
    let direction = this.apiPath+"login";
    return this.http.post<ILoginResponse>(direction, form);
  }
}
