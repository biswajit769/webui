import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public showtab1;
openNav() {
	this.showtab1 = !this.showtab1;
    }
   
}
