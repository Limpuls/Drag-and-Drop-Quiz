import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { routing } from '../app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  public loggedIn = false;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.user = _firebaseAuth.authState;
    this.loggedIn = !!sessionStorage.getItem('user');
    console.log(db);
    this.user.subscribe(
        (user) => {
          if (user && user.uid) {
            this.userDetails = user;
            var email = this.userDetails.email;
            console.log("hello im user" + " " + email);
            this.setCurrentUser(email);
            this.loggedIn = true;
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
    firebase.auth().signInWithEmailAndPassword(email, pass).then(value => {

        console.log(value);


    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error" + error);
    });

//var user = firebase.auth().currentUser;
//var email;
if (this.userDetails) {

console.log("hello im user" + " " + email);
//email = user.email;

} else {
console.log("not working");
console.log(this.db.list("/users").valueChanges());
}


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
      this.loggedIn = false;
      firebase.auth().signOut().then(function() {

        // Sign-out successful.
        console.log("signout successful");
    }).catch(function(error) {
        // An error happened.
        console.log("error happened");
      });
    }

    retrieveUsersAndScore() {
      return this.db.list("/users").valueChanges();
    }

  }
