import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/models/usersList.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formCreate = new FormGroup({
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    email: new FormControl('')
  });

  constructor(private alerts:AlertsService, private router:Router, private api:ApiService) {}

  putForm() {
    this.api.postUser(this.formCreate.getRawValue()).subscribe({
      next: data => {
        this.alerts.showSuccess('User created successfully', 'Done!');
        this.router.navigate(['list']);
      },
      error: err => {
        this.alerts.showError('There was an error creating the user, try again', 'Error');
      }  
    });
  }
}