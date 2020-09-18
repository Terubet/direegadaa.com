import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { NotificationModel } from 'src/app/model/notification-model';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  // form data values
  login_form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });
  // notification message
  message: { "status": string; "message": string; };

  constructor(private auteservice: AuteServiceService, private router: Router ) { }
  date: Date = new Date();

  ngOnInit(): void {
    this.auteservice.GetUserLogin().subscribe((resp:any)=>{
      console.log(resp);
    })

    
  }
  // send login api request
  login() {
      console.log(this.login_form.value);
    this.auteservice.UserLogin(this.login_form.value).subscribe((resp: any) => {
      console.log("wtf");
      this.message = this.auteservice.checkForAuthentication(resp);
      this.router.navigate(['dashboard']);
    },
      err => {
        console.log(err);
        this.message = this.auteservice.checkForAuthentication(err);
      }
    );
  }
}
