import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
declare var $
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router:Router,public userservice:UserService) { }

  ngOnInit() {

    this.Finchainscore()
  }


  model1(){
  	$('#myModal').modal('show');
  }

  save1(){
  	$('#myModal').modal('hide');
  	this.router.navigate(['/finpay/dashboard'])
  }

  public credit_data;
  public Finchainscore(){
    this.userservice.setcreditlimit().subscribe(data =>{
      this.credit_data = data[0]['credit_limit'];
      console.log("@@@@@@@@@",this.credit_data)
    },)
  }

}
