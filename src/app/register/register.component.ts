import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../login/passwordValidator';
import { AuthService } from '../services/auth.service';
//var firebase = require('firebase');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
  email:['',Validators.required ],
  password:['',Validators.compose([Validators.required,
    PasswordValidator.cannotContainSpace])]
    })

   }


   signInWithEmail() {
     //const formValue = this.form.value;
     this.authService.regUser(this.form.controls['email'].value, this.form.controls['password'].value);
   }
}
