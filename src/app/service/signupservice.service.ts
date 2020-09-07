import { AppConfig } from '../config-file/app-config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationModel } from '../model/notification-model';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private httpClient: HttpClient) { }

  UserSignup(userData) {
    return this.httpClient.post(AppConfig.apiRootUrl + "/Users", userData);
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
}
