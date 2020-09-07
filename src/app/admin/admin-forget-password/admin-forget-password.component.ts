import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { NotificationModel } from 'src/app/model/notification-model';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.scss']
})
export class AdminForgetPasswordComponent implements OnInit {

  // form data values
  forget_form = new FormGroup({
    email: new FormControl('', Validators.email),

  });
  // notification message
  message: { "status": string; "message": string; };

  constructor(private auteservice: AuteServiceService, private router: Router) { }
  date: Date = new Date();

  ngOnInit(): void {

  }
  // send login api request
  forget() {
    console.log(this.forget_form.value);
    this.auteservice.Forgetpass(this.forget_form.value).subscribe((resp: any) => {
      console.log("wtf");
      this.message = this.auteservice.checkForAuthentication(resp);
      this.router.navigate(['createpassword']);
    },
      err => {
        console.log(err);
        this.message = this.auteservice.checkForAuthentication(err);
      }
    );
  }

}
