import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("#myNavbar li a").click(function () {
          $("#myNavbar li a").removeClass("active");
          // $(".tab").addClass("active"); // instead of this do the below 
          $(this).addClass("active");   
      });
      });
  }

}
