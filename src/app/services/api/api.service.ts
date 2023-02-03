import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/models/login.interface';
import { IResponse } from 'src/app/models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserData, IUserInformation, IUserSupport } from 'src/app/models/usersList.interface';
import { IUser } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiPath:string = 'https://reqres.in/';

  constructor(private http:HttpClient) { }

  loginByEmail(form:ILogin):Observable<IResponse> {
    let direction = this.apiPath+"api/login";
    return this.http.post<IResponse>(direction, form);
  }

  getUsersList(page:number, per_page:number):Observable<IUserInformation<IUserData,IUserSupport>> {
    let direction = this.apiPath+"api/users?page="+page+"&per_page="+per_page;
    return this.http.get<IUserInformation<IUserData,IUserSupport>>(direction);
  }

  getUser(id:any):Observable<IUser<IUserData,IUserSupport>> {
    let direction = this.apiPath+"api/users/"+id;
    return this.http.get<IUser<IUserData,IUserSupport>>(direction);
  }
}
