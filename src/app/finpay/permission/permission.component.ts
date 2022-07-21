import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  perm(){
  	this.router.navigate(['finpay/login'])
  }

}
