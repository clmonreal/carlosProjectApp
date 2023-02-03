import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user.interface';
import { IUserData, IUserSupport } from 'src/app/models/usersList.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user: IUserData[];
  formEdit = new FormGroup({
    name:new FormControl(''),
    job:new FormControl(''),
    updatedAt: new FormControl('')
  });

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private api:ApiService) {
    this.user = {} as IUserData[];
  }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getUser(userId).subscribe(response => {
      console.log(response.data);
      this.user = response.data;
      // this.formEdit.setValue({
      //   'name':this.user.name,
      //   'job':this.user.job,
      // })
    });
  }
}
