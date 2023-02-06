import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthLoadGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    if(!this.auth.isLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
