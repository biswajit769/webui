import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { stringify } from 'querystring';

declare var $;
@Component({
  selector: 'app-finpaylogin',
  templateUrl: './finpaylogin.component.html',
  styleUrls: ['./finpaylogin.component.css']
})
export class FinpayloginComponent implements OnInit {
  myForm: FormGroup;
  public sendotp=true;
  public otp;
  public mobilenum_exist='';
 


  constructor( private router: Router,public fb: FormBuilder,public userservice:UserService) { 
  
  }

  ngOnInit() {

    $('#myModal').modal('show');


    this.myForm = this.fb.group({
      mobile:['', Validators.required]
  });
  }
  public Count1=0;
  public forms1:boolean=true;
  public forms2:boolean=false;
  public forms3:boolean=false;

  model: any = {};
  public buttonName: any;
  public Otpsent: any
  public mobileNo: string;
  public error_message: boolean
  public verified;
  public invalidotp


  Next(mobileno){
 console.log(mobileno)
   
    let userMobile = { userMobileNo: mobileno }
    if (mobileno.length == 10) {  
      this.userservice.generateOtp(userMobile).subscribe(data => {
        console.log(data)
        if (data['sucess'] == 'sucess' && data.token) {
          localStorage.setItem('token',data['token']);
          // let serializedForm = JSON.stringify(data);
          this.Otpsent = data
          this.mobileNo = data;
          this.error_message = false;
          this.invalidotp = false;
          this.verified = false;
          if(this.Count1==0){
            this.forms1=true;
           this.forms2=false;
           this.forms3=false;
         }
         this.Count1++;  
         if(this.Count1==1){ 
           this.forms1=false;
           this.forms2=true;
           this.forms3=false;
         }
        
        }
        else {
          this.error_message = data;
          this.Otpsent = false;
          this.invalidotp = false;
          this.verified = false;
          console.log( this.error_message)
        }
      });
    }
    else {
      
      // alert("Invalid mobile Number")
    }

  }
  

  Previous(){

    if(this.Count1==1){
    
      this.forms1=true;
      this.forms2=false;
     
      this.Count1=0;
    }
     if (this.Count1==2){
     
      this.forms1=false;
      this.forms2=true;
     
      this.Count1=1;
    }

    
      }



    



      public mobieq: any;
      public Otpsent2: any

      onOtpChange(data,mobile)
      {
        console.log(data)
        console.log(mobile)
        this.Otpsent2=data;
        this.mobieq=mobile;
        console.log(  this.mobieq)
        console.log( this.Otpsent2)
      }



      verifyotp() {
        let userData = {
          userMobileNo: this.mobieq,
          userOtp: this.Otpsent2
        }
        console.log(userData);
        // if (otpcheck.length == 6) {
    
          this.userservice.verifyotp(userData).subscribe(data => {
            console.log(data);
            if (data == 'OTP verified') {
              this.router.navigate(['/finchainpay/fin-dashboard']);
              $('#myModal').modal('hide');
              // this.verified = data;
              // this.Otpsent = !this.Otpsent
              // this.error_message = this.error_message
              // this.invalidotp = false;
            }
            else {
              this.invalidotp = data;
              console.log(this.invalidotp);
            }
          });
        // }
        // else {
    
        // } 
      }















closs(){
    alert("dweed")
    $('#myModal').modal('hide');
    this.router.navigate(['finchainpay/finpayhome'])
  }

 close(){
   $('#myModal').modal('hide');
   this.router.navigate(['finchainpay/finpayhome'])
 }


//  verifyotp(event:any) {
//   console.log("otp entered",event);
//   console.log("mobilenumber",this.mobileno);
//   this.otp=event;
//   let otp=this.otp;
//   let mobilenumber=this.mobileno;
//     let data={"mobilenumber":mobilenumber,"otp":otp};
//     let verifyotp=ApplicationUrls.verifyotp;
//    this.restServices.Post(verifyotp,data).subscribe(backenddata =>{
//         console.log("get datattaa", backenddata);
// });
// }
// sendotp() {
//   console.log("mobilenumber",this.mobileno);
//   let mobilenumber=this.mobileno;
//   let data={"mobilenumber":mobilenumber};
//     let sendotp=ApplicationUrls.SENDOTP;
//    this.restServices.Post(sendotp,data).subscribe(backenddata =>{
//         console.log("get datattaa", backenddata);
// });
// }


otpgenerate(data){
  if(this.Count1==0){
     
    this.forms1=true;
    this.forms2=false;
    this.forms3=false;
  }
  this.Count1++;
  
  if(this.Count1==1){
  
    this.forms1=false;
    this.forms2=true;
    this.forms3=false;
  }

  if(this.Count1==2){
   
   
    this.forms1=false;
    this.forms2=false;
    this.forms3=true;
  }
 
  console.log(data)
  this.mobilenum_exist='';
  this.userservice.generateotp(data).subscribe(
      data =>{
        console.log("response from backend",data);
         if (data=='Already registered'){
            this.mobilenum_exist='This Mobile number Already registered';
          }else{
          this.sendotp=false;
          this.otp=data;
          console.log(this.otp)
        }
        
        error => console.log("errrroooooorrr",error)
      }
    )
}



  }

 