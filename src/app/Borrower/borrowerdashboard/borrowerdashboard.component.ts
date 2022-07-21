import { Component, OnInit } from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-borrowerdashboard',
  templateUrl: './borrowerdashboard.component.html',
  styleUrls: ['./borrowerdashboard.component.css']
})
export class BorrowerdashboardComponent implements OnInit {
    constructor(public request:BorrowerserviceService,
    public borrowerserviceService:BorrowerserviceService,
    private commonService:LoginService,private router:Router) { 
      this.Finchainscore();
      this.profiledata()
     this.availAmount()
    }

  current_user:any;
  companyname:any;
  finchain:any;
  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('current_user_data'));
    var role = currentUser.role; // your token
    this.current_user = role;
}
public profi:File = null;
public Finchainscore(){
  this.request.getfinChainscore().subscribe(data =>{
    this.finchain = data;
  },)
}
public avail_amount:any;
public availAmount(){
  this.request.getAvailaaaamount().subscribe(data =>{
    this.avail_amount = data.available_amount;
    this.router.navigate(['Borrower_Dashboard/Dashboard-Details']);
  },)
}

  openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    }
    
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    //upload profile pic
  selectedFile: File;
   public texthide:any;
     changefrontimage(event){
      this.selectedFile= event.target.files[0]
     
       const uploadData = new FormData();
       uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
       this.request.uploaddocs(uploadData).subscribe(
      backResponse => {
        this.texthide=true
        this.profi=backResponse;
      },
      error => console.log("erroorrrr",error)
    );
     }


     profiledata(){
      this.borrowerserviceService.profiledata1().subscribe(backResponse => {      
        this.profi=backResponse.profile_photo;
        this.texthide=true;
      },
      error => console.log("erroorrrr",error)
    );
  }

  public recalll(data){ 
    this.borrowerserviceService.changeMessage(data);

}
  
  newloan_reuestpath(){
    this.borrowerserviceService.checkFinalRegField().subscribe(backResponse => {
      if(backResponse.companytype==null || backResponse.gst_number==null|| backResponse.number_of_employees==null || backResponse.director_name ==null|| backResponse.director_mobile_number ==null || backResponse.selectedState ==null || backResponse.selectedcity ==null || backResponse.account_number ==null || backResponse.acounttypes ==null){
        this.recalll(backResponse);
        this.router.navigate(['/BorrowingCompanyRegistration']);
      }
      else{
        this.router.navigate(['Borrower_Dashboard/Newloan-Request']);
      }
    },
      error => console.log("erroorrrr", error)
    );

  }






    }
   







