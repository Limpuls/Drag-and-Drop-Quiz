import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;

  }

  logUserIn(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
console.log("error" + error);
}).success(function(success) {
console.log("logged in");
});
}

  regUser() {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
 .catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
 });
//console.log(this.form.controls['email'].value);
    }
  }
