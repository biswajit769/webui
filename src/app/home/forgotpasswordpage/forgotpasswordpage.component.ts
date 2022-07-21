import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-forgotpasswordpage',
  templateUrl: './forgotpasswordpage.component.html',
  styleUrls: ['./forgotpasswordpage.component.css']
})
export class ForgotpasswordpageComponent implements OnInit {
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  paswordForm: FormGroup;
   
  submitted = false;
  returnUrl: string;
constructor(private formBuilder: FormBuilder,
      private router: Router,
      private loginService: LoginService,
      // private alertService: AlertService
      ) {}

 
     ngOnInit() {
      this.paswordForm = this.formBuilder.group({
          mobile: ['', Validators.required],
          password: ['', Validators.required]
      });
     
  }
// convenience getter for easy access to form fields
  get f() { return this.paswordForm.controls; }
public otp;
public otp1:any;
public mobile_number;
public error_message;

  forgotForm(username){
    console.log(username);
    let mobile = {'userMobileNo':username}
    this.submitted = true;
    if (username.length == 0 || username == null || username=== "" || username == undefined) {
      }
      else {
    this.loginService.forgotpassword(mobile).subscribe( data => {
      console.log("response",data)
      if(data[0]['a'] =="Password reset OTP sent"){
        this.error_message = '';
      this.otp= true;
      this.mobile_number= data[0]['b'];
      localStorage.setItem('mobileNo',this.mobile_number);
     console.log(this.mobile_number);
      } 
      else{
      this.error_message = "Mobile Number doesn't exist in our database";
     
      } 
        });
       
      }
    
  }

  //veryfy
  verifyOtp(userotp){
    // alert("verify otp");
    console.log("#############",userotp);
    let otp = {'userOtp':userotp,'userMobileNo':this.mobile_number}
    this.submitted = true;
    if (userotp.length == 0 || userotp == null || userotp=== "" || userotp == undefined) {
      }
      else {       
      this.loginService.verifyotp(otp).subscribe( data => {
      console.log("response",data)
      if(data=="OTP verified"){
        this.error_message = '';
        this.router.navigate(['resetpassword']);
      }
      else{
      this.error_message =  "OTP Invalid" 

      }
        });
       
      }
      
  }
}
