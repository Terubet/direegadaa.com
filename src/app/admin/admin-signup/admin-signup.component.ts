import { SignupserviceService } from './../../service/signupservice.service';
// import { MustMatch } from '/helper/must-match';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { NotificationModel } from 'src/app/model/notification-model';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { from } from 'rxjs';
// import custom validator to validate that password and confirm password fields match
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})

export class AdminSignupComponent implements OnInit {
  // form data values
  registerForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', (Validators.required, Validators.minLength(6))),
    cpassword: new FormControl('', Validators.required),
    acceptTerms: new FormControl(false, Validators.requiredTrue)
    });
  message: NotificationModel;

  constructor(private signupservice: SignupserviceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  signup(){
    console.log(this.registerForm.value);
    
    this.signupservice.UserSignup(this.registerForm.value).subscribe((resp:any)=>{
      console.log("success");
        this.registerForm.patchValue({
        fname: '',
        email: '',
        password: ''
      })
    }),
      err => {
        console.log(err);
        this.message = this.signupservice.checkForAuthentication(err);
      }

  }
}
