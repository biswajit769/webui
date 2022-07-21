import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  get(){
   this.router.navigate(['finpay/permission'])
 }

}
