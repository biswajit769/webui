import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm:FormGroup;
    public buttonName: any;
    public Otpsent: any
    public mobileNo: string;
    public error_message: boolean
    public verified;
    public invalidotp;
    model: any = {};
    public mobieq: any;
    public Otpsent2: any

  constructor(private router: Router, public fb: FormBuilder,public userservice:UserService) { }

  ngOnInit() {
  	this.loginForm = this.fb.group({
      mobile:['', Validators.required]
  });
  }
   public Count1=0;
  public forms1:boolean=true;
  public forms2:boolean=false;
  public forms3:boolean=false;

    Next(mobileno){
 console.log(mobileno)
   
    let userMobile = { userMobileNo: mobileno }
    if (mobileno.length == 10) {  
      this.userservice.generateOtp(userMobile).subscribe(data => {
        console.log(data)
        if (data['sucess'] == 'sucess' && data.token) {
          localStorage.setItem('token',data['token']);
          // let serializedForm = JSON.stringify(data);
          // localStorage.setItem('mobileNo', serializedForm);

       
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
      this.forms3=false;
      this.Count1=0;
    }
     if (this.Count1==2){
     
      this.forms1=false;
      this.forms2=true;
      this.forms3=false;
      this.Count1=1;
    }

    
      }



closs(){
    alert("dweed")
    $('#myModal').modal('hide');
    this.router.navigate(['finpay'])
  }

 close(){
   $('#myModal').modal('hide');
   this.router.navigate(['finpay'])
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
              this.router.navigate(['/finpay/lock']);
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

      onOtpChange(data,mobile)
      {
        console.log(data)
        console.log(mobile)
        this.Otpsent2=data;
        this.mobieq=mobile;
        console.log(  this.mobieq)
        console.log( this.Otpsent2)
      }
}
