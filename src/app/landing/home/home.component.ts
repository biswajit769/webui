import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router,RouterModule,NavigationEnd} from '@angular/router';
declare var $

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  	private commonService:LoginService,
  	private route:Router
  	) { }

  ngOnInit() {




}





 
}

