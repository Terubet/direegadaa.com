import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Injectable({
  providedIn: 'root'
})

export class Auth implements CanActivate, CanActivateChild, CanLoad {

  constructor( private AuthService: AuteServiceService, private route: Router ) {

  }
  canActivate() {
    if (this.AuthService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
  canActivateChild(){
    if (this.AuthService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
  canLoad(){
    if (this.AuthService) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }

}
