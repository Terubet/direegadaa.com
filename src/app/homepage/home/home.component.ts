import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'NG7Swiper';

  images: Array<any> = [];

  constructor() {
    this.images = [
      { name: 'http://lorempixel.com/640/480/animals/' },
      { name: 'http://lorempixel.com/640/480/abstract/' },
      { name: 'http://lorempixel.com/640/480/business/' },
      { name: 'http://lorempixel.com/640/480/cats/' },
      { name: 'http://lorempixel.com/640/480/city/' },
      { name: 'http://lorempixel.com/640/480/food/' },
      { name: 'http://lorempixel.com/640/480/nightlife/' },
      { name: 'http://lorempixel.com/640/480/fashion/' },
      { name: 'http://lorempixel.com/640/480/people/' },
      { name: 'http://lorempixel.com/640/480/nature/' },
      { name: 'http://lorempixel.com/640/480/sports/' },
      { name: 'http://lorempixel.com/640/480/transport/' },
    ];
  }

  ngOnInit(): void {

  }

}
