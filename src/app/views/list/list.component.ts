import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData, IUserInformation, IUserSupport } from 'src/app/models/usersList.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users:IUserInformation<IUserData,IUserSupport>;
  
  constructor(private api:ApiService, private router:Router) { 
    this.users = {} as IUserInformation<IUserData,IUserSupport>;
  }

  ngOnInit(): void {
    this.api.getUsersList(1, 12).subscribe(response => {
      this.users.data = response?.data?.map(item => {
        var user = {} as IUserData;
        user.id = item?.id;
        user.first_name = item?.first_name;
        user.last_name = item?.last_name;
        user.email = item?.email;
        return user;
      });
      // console.log(this.users);
    });
  }

  userEdit(id:number) {
    // console.log(id);
    this.router.navigate(['edit', id]);
  }
}
