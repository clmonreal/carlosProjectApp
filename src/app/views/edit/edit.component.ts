import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponse } from 'src/app/models/reponse.interface';
import { IUserData, IUserSupport } from 'src/app/models/usersList.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
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

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private api:ApiService, private alerts:AlertsService) {
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
    });
  }

  updateUser() {
    this.api.putUser(this.userId, this.formEdit.getRawValue()).subscribe({
      next: data => {
        console.log(data);
        this.alerts.showSuccess('Data modified successfully', 'Done!');
        this.router.navigate(['list']);
      },
      error: err => {
        console.log(err);
        this.alerts.showError('There was an error modifying data, try again', 'Error');
      }  
    });
  }

  deleteUser() {
    this.api.deleteUser(this.userId).subscribe({
      next: data => {
        this.alerts.showSuccess('Data deleted successfully', 'Done!');
        this.router.navigate(['list']);
      },
      error: err => {
        this.alerts.showError('There was an error deleting data, try again', 'Error');
      }  

    });
  }
}
