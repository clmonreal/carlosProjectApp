import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title:string = 'CARLOG APP';

  constructor(private auth:AuthService, private router:Router) {}

  onLogout() {
    this.auth.logOut();
    this.router.navigate(['login']);
  }
}
