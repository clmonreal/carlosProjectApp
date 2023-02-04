import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/models/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserData, IUserSupport } from 'src/app/models/usersList.interface';
import { IPaginatedResponse, IResponse } from 'src/app/models/reponse.interface';
import { ILoginResponse } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiPath:string = 'https://reqres.in/api/';

  constructor(private http:HttpClient) { }

  loginByEmail(form:ILogin):Observable<ILoginResponse> {
    let direction = this.apiPath+"login";
    return this.http.post<ILoginResponse>(direction, form);
  }

  getUsersList(page:number, per_page:number):Observable<IPaginatedResponse<IUserData,IUserSupport>> {
    let direction = this.apiPath+"users?page="+page+"&per_page="+per_page;
    return this.http.get<IPaginatedResponse<IUserData,IUserSupport>>(direction);
  }

  getUser(id:any):Observable<IResponse<IUserData,IUserSupport>> {
    let direction = this.apiPath+"users/"+id;
    return this.http.get<IResponse<IUserData,IUserSupport>>(direction);
  }

  putUser(id:any, form:IUserData):Observable<IUserData> {
    let direction = this.apiPath+"users/"+id;
    return this.http.put<IUserData>(direction, form);
  }

  deleteUser(id:any):Observable<IUserData> {
    let direction = this.apiPath+"users/"+id;
    return this.http.delete<IUserData>(direction);
  }

  postUser(form:IUserData):Observable<IUserData> {
    let direction = this.apiPath+"users";
    return this.http.post<IUserData>(direction, form);
  }
}