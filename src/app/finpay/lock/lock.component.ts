import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  get(){
  	this.router.navigate(['finpay/features'])
  }

}
