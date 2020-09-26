import { AuteServiceService } from './../../../service/aute-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config-file/app-config';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  header;
  constructor( private Auth: AuteServiceService, private router: Router  ) { }

  ngOnInit(): void {
    
  }

}
