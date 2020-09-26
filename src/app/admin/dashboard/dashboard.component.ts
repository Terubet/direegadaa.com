import { Component, OnInit } from '@angular/core';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config-file/app-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard;
  constructor(
    private authService: AuteServiceService,
    private router: Router
  ) { }


  ngOnInit() {
    this.dashboard = AppConfig.dashboard;
   

  }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
