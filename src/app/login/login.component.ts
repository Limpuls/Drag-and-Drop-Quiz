import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidator } from './passwordValidator';
import { LoginService } from './login.service';
import { AuthService } from '../services/auth.service';
var firebase = require('firebase');
import * as firebase from 'firebase'
@Component({
    selector:'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent  {

    form: FormGroup;

    constructor(fb: FormBuilder, private _loginService: LoginService, private auth: AuthService){

        this.form = fb.group({
            email:['',Validators.required ],
      password:['',Validators.compose([Validators.required,
PasswordValidator.cannotContainSpace])]
        })

        email = this.form.controls['email'].value;
        password = this.form.controls['password'].value;
    }

    login(){
/*var result = this._loginService.login(this.form.controls['username'].value,
   this.form.controls['password'].value);

        if(!result){
            this.form.controls['password'].setErrors({
                invalidLogin: true
            });
        } else {
          console.log("success");
        }*/
          this.auth.logUserIn(email, password).then((res) => {
          console.log(res);
          //this.router.navigate(['dashboard']);
        })
        .catch((err) => console.log('error: ' + err));
    }


}
