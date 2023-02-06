import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formCreate: FormGroup;
  
  constructor(private alerts:AlertsService, private router:Router, private formbuilder:FormBuilder) {
    this.formCreate = this.formbuilder.group({
      name:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  sendRequest() {
    this.alerts.showSuccess('The query has been sent', 'Done!');
    this.router.navigate(['home']);
  }
}
