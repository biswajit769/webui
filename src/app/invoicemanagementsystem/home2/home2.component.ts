import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit() {


  }
 
  bottomtotop() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }
}
