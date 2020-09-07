
import { AppConfig } from '../config-file/app-config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationModel } from '../model/notification-model';

@Injectable({
  providedIn: 'root'
})
export class AuteServiceService {

  constructor(private httpClient: HttpClient) { }

  UserLogin(userData) {
    return this.httpClient.post(AppConfig.apiRootUrl + "/Users/login", userData);
  }
  GetUserLogin() {
    return this.httpClient.get(AppConfig.apiRootUrl + "/Users/login" );
  }
  Forgetpass(userEmail) {
    return this.httpClient.post(AppConfig.apiRootUrl + "/Users/reset", userEmail);
  }

  checkForAuthentication(login_repo) {
    // login success
    if (login_repo.id) {
      let message: NotificationModel = { 'status': 'success', 'message': 'Success full' };
      localStorage.setItem('token', login_repo.id);
      return message
    }
    if (login_repo == 'success') {
      let message: NotificationModel = { 'status': 'success', 'message': 'Success full' };
      return message
    }
    // login failures

    //connection problem
    if (login_repo.status == 0) {
      console.log('test error');
      let message: NotificationModel = { 'status': 'warning', 'message': 'Connection b/n Server is corrupted' };
      return message
    }


    else {
      let message: NotificationModel = { 'status': 'warning', 'message': login_repo.error.error.name };
      return message
    }


  }

  loggedIn() {
    console.log(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');

  }
  logOut() {
    localStorage.removeItem('token');
  }

}
