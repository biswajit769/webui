import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

get(){
	this.router.navigate(['finpay/dashboard'])
}
}
