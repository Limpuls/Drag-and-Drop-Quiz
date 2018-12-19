import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _auth: AuthService, public _route: Router) {

  }
  canActivate():boolean {
    if(this._auth.isLoggedIn()) {
      return true;
    } else {
      this._route.navigate(["/login"]);
      return false;
    }
  }
}
