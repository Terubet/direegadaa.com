import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // Back to top
    var amountScrolled = 200;
    var amountScrolledNav = 25;

    $(window).scroll(function () {
      if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
      } else {
        $('button.back-to-top').removeClass('show');
      }
    });

    $('button.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    
  }

}
