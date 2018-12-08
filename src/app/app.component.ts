import { Component } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { AuthService } from './services/auth.service';
var firebase = require('firebase');

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-draganddrop';
  constructor(private auth: AuthService) { }
  LoggedIn() {
      return this.auth.isLoggedIn();
  }
  logout() {
    return this.auth.logOut();
  }
}
