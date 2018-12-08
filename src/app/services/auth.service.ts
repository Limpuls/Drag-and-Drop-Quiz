import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { routing } from '../app.routing';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  public loggedIn = false;



  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.loggedIn = !!sessionStorage.getItem('user');

    this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;

            console.log(this.userDetails);
          } else {
            this.userDetails = null;
          }
        }
      );
  }

  // Set current user in your session after a successful login
    setCurrentUser(email: string): void {
        sessionStorage.setItem('user', email);
        this.loggedIn = true;
    }

    // Get currently logged in user from session
    getCurrentUser(): string | any {
        return sessionStorage.getItem('user') || undefined;
    }

    isLoggedIn() {
    return this.loggedIn;
    }

  logUserIn(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
console.log("error" + error);
})
//var user = firebase.auth().currentUser;
//var email;
if (this.userDetails) {
email = this.userDetails.email;
console.log("hello im user" + " " + email);
//email = user.email;
this.setCurrentUser(email);
 this.loggedIn = true;
} else {
console.log("not working");
}

this.router.navigate(['']);
}

  regUser(email, pass) {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
 .catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
 });
//console.log(this.form.controls['email'].value);
    }

    logOut() {
      sessionStorage.removeItem('user');
      this.loggedIn = false;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("signout successful");
    }).catch(function(error) {
        // An error happened.
        console.log("error happened");
      });
    }

  }
