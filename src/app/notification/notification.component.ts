import { Component, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/model/notification-model';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }
  message: NotificationModel;
  ngOnInit(): void {
  }

}
