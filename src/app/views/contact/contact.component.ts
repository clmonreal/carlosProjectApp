import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private alerts:AlertsService, private router:Router) {
    
  }

  showMessage() {
    this.alerts.showSuccess('The query has been sent', 'Done!');
    this.router.navigate(['home']);
  }
}
