import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl ,FormBuilder, Validators } from '@angular/forms';
import {LoginService } from '../../../services/login.service';
declare var $;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
singForm:any;

 gstpattern=/^([0-9]){2}([A-Z]){5}([0-9]){4}([A-Z]){1}([0-9]){1}([A-Z]){1}([0-9]){1}?$/;
public pastpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

  constructor( private formBuilder: FormBuilder,public service:LoginService) { 



   this.singForm = this.formBuilder.group({
      cpass: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['',  Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern(this.pastpattern)],
      twitter: ['', Validators.required],
      facebook: ['', Validators.required],
      gplus: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      mob: ['', Validators.required],
      otp: ['', Validators.required],
       Cname: ['', Validators.required],
        gstname: ['', [Validators.required, Validators.minLength(15) ,Validators.maxLength(15),Validators.pattern(this.gstpattern)]], 
    });}
  
public n:any;
  
  ngOnInit() {

var steps0=document.getElementById('step1');
steps0.classList.add('active');

  }
  public Count1=0;
  public forms1:boolean=true;
  public forms2:boolean=false;
  public forms3:boolean=false;
  Next(){
var steps1=document.getElementById('step1');
var steps2=document.getElementById('step2');
var steps3=document.getElementById('step3');
steps1.classList.add('active');
    if(this.Count1==0){
      steps1.classList.add('active');
      steps2.classList.remove('active');
      steps3.classList.remove('active');
      this.forms1=true;
      this.forms2=false;
      this.forms3=false;
    }
    this.Count1++;
    
    if(this.Count1==1){
      steps1.classList.add('active');
      steps2.classList.add('active');
      steps3.classList.remove('active');
      this.forms1=false;
      this.forms2=true;
      this.forms3=false;
    }

    if(this.Count1==2){
     
      steps1.classList.add('active');
      steps2.classList.add('active');
      steps3.classList.add('active');
      this.forms1=false;
      this.forms2=false;
      this.forms3=true;
    }
  }

  Previous(){
var steps1=document.getElementById('step1');
var steps2=document.getElementById('step2');
var steps3=document.getElementById('step3');
steps2.classList.add('active');
    if(this.Count1==1){
      steps1.classList.add('active');
      steps2.classList.remove('active');
      steps3.classList.remove('active');
      this.forms1=true;
      this.forms2=false;
      this.forms3=false;
      this.Count1=0;
    }
     if (this.Count1==2){
      steps1.classList.add('active');
      steps2.classList.add('active');
      steps3.classList.remove('active');
      this.forms1=false;
      this.forms2=true;
      this.forms3=false;
      this.Count1=1;
    }

    
      }

get S() { return this.singForm.controls; }


public submiteddat=false;
sigupdata(data):void{
    console.log(data);
    this.submiteddat = true;
    if(this.singForm.invalid){
      return;
    }
    alert("sucessss####");
  }

public moblen:any=0;
public mbl:any;
  checknum(data){
    console.log("mobbbbbbbbbbb",data.target.value);
    this.mbl= data.target.value;
    this.moblen=this.mbl.length;
    console.log("LLLLLaaa",this.moblen);

  }

public optgent=true;
// public otps:boolean=false;
generateotp(){
  // alert("AAAAAAAAAAAAAA");
  console.log("otpppppp");

    if(this.mbl.length==10){
      let obj = {A:this.mbl}
      this.service.Modata(obj).subscribe(data=>{
        console.log("responce .....",data)
        this.optgent=false;
      })
    }

}

  mobnum(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault(); 
    }
  }

    keyPress1(event: any) {
    const pattern = /[a-zA-Z ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  passwordcheck(data){
    console.log("password&&&&&",data);
  }


 keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


}
