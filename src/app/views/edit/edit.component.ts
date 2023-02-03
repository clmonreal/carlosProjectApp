import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserData, IUserSupport } from 'src/app/models/usersList.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userData: IUserData;
  userId:string;
  formEdit = new FormGroup({
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    email: new FormControl('')
  });

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private api:ApiService) {
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getUser(this.userId).subscribe(response => {
      this.userData = response.data
      this.formEdit.setValue({
        'first_name': this.userData.first_name,
        'last_name': this.userData.last_name,
        'email': this.userData.email,
      })
      // console.log(this.formEdit.value);
    });
  }

  putForm(form) {
    console.log(form.value);
    this.api.putUser(this.userId, form).subscribe(response => {
    console.log(response);
    });
    this.router.navigate(['list']);
  }

  deleteUser() {
    alert('User deleted');
    this.api.deleteUser(this.userId).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['list']);
  }
}
