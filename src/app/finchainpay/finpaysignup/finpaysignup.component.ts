import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-finpaysignup',
  templateUrl: './finpaysignup.component.html',
  styleUrls: ['./finpaysignup.component.css']
})
export class FinpaysignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  kycForm: FormGroup;
  paymentForm: FormGroup;
  disabled=false;
  firstFormGroup:any;
  secondFormGroup:any;
  thirdFormGroup:any;
  
 

  panpattern=/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
  emailpattern=/^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\./;



  public banks = ['SBI Bank','HDFC Bank','ICICI Bank','Axis Bank','Karnataka Bank',
                  'Karur Vysya Bank','Bank of India','Canara Bank','Central Bank of India']

  

   


  constructor(public fb: FormBuilder, public userservice:UserService,private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      PANnumber:['', [Validators.required,Validators.minLength(10) ,Validators.maxLength(10),Validators.pattern(this.panpattern)]],
      Name:['', Validators.required],
      DOB:['', Validators.required],
      mobile:['',Validators.required],
      Email: ['', [Validators.required, Validators.pattern(this.emailpattern)]],      
      gender: ['', Validators.required],
      Type: ['', Validators.required],
      Income: ['', Validators.required],
      Address: ['', Validators.required],
      Locality: ['', Validators.required],

      PINcode: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      City: ['', Validators.required],
      Consent: ['',Validators.required],

      aadhaarNo: ['', Validators.required],
      name: ['', Validators.required],


      accountHolderName: ['', Validators.required],
      bank: ['', Validators.required],
      accountNo: ['', Validators.required],
      ifscCode: ['', Validators.required],
      branch: ['', Validators.required]
    });
    }
   
  get editform() { return this.signupForm.controls; }
  public applyloanDetails: any;
  public obj: any;
  public obj1: any;

  
  Signup(signupForm): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
  }else{
    let serializedForm = JSON.stringify(signupForm);
    console.log("component/ dataaa",serializedForm);
    this.applyloanDetails
    this.applyloanDetails = new FormData();
    this.applyloanDetails.append('Aadhar', this.uploadFile);
    this.applyloanDetails.append('Pancard', this.uploadFile1);
    this.applyloanDetails.append('Statement', this.uploadFile1);
    this.applyloanDetails.append('formdata',serializedForm);

    this.userservice.signup(   this.applyloanDetails).subscribe(data=>{
      if(data=="Data Saved"){
      $('#myModalopen').modal('show');
    console.log('###########################',data)
      }
    });
  }
  }

  
  nextpage(){
    $('#myModalopen').modal('hide');
    this.router.navigate(['/finchainpay/flow-login']);

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
  
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress1(event: any) {
    const pattern = /[a-z\+\A-Z ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
uploadFile:File;
uploadFile1:File;
uploadFile2:File;

  aadhaarUpload(event){
    console.log("KUTA &&&&",event.target.files[0]);
    this.uploadFile =event.target.files[0];
    // const upFile = new FormData();
    // upFile.append("IDIOT.....",this.uploadFile)
    // this.userservice.aadhaarUpLoad(upFile).subscribe(data => {
    //   console.log("aadhaar fileeee%%%%",data);
    // });
  }

  panUpload(event){
    console.log("KUTA &&&&",event.target.files[0]);
    this.uploadFile1 =event.target.files[0];
    // const upFile = new FormData();
    // upFile.append("IDIOT.....",this.uploadFile)
    // this.userservice.panUpLoad(upFile).subscribe(data => {
    //   console.log("pan fileeeeee%%%%",data);
    // });

  }

  statementUpload(event){
    console.log("KUTA &&&&",event.target.files[0]);
    this.uploadFile2 =event.target.files[0];
    
    // const upFile = new FormData();
    // upFile.append("IDIOT.....",this.uploadFile)
    // this.userservice.statementUpload(upFile).subscribe(data => {
    //   console.log("statement fileeee%%%%",data);
    // });

  }
}


