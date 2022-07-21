import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

declare var $
@Component({
  selector: 'app-finpaydashboard',
  templateUrl: './finpaydashboard.component.html',
  styleUrls: ['./finpaydashboard.component.css']
})
export class FinpaydashboardComponent implements OnInit {
public Cred;

  constructor(public router:Router, public service:UserService) { }

  ngOnInit() {
  this.service.getDataCrdt().subscribe(data => {
  this.Cred=data;
  });

  }

  save1(){
  	$('#myModal').modal('hide');
  	this.router.navigate(['/finchainpay/fin-dashboard'])
  }
public amtData;
  model1(data){
    console.log("What is AMTTTT value..",data);
    this.service.amout(data).subscribe(data =>{
      console.log("Amoutvalue...",data);
    
    })
  	$('#myModal').modal('show');
  }


  logOut(){
    localStorage.clear();
  }

}
