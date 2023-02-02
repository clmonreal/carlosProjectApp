import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/models/login.interface';
import { IResponse } from 'src/app/models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiPath:string = 'http://reqres.in/';

  constructor(private http:HttpClient) { }

  loginByEmail(form:ILogin):Observable<IResponse> {
    let direction = this.apiPath+"api/login";
    return this.http.post<IResponse>(direction, form);
  }
}
