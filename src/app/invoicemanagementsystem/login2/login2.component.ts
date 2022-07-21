import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginForm: FormGroup;
  userAddressValidations: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'Mobile': [null, [Validators.required]],
      'password': [null, [Validators.required, Validators.minLength(6)]]
    });
    this.userAddressValidations = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]]
    });
  }
  //  easy access to form fields of number only
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  // convenience getter for easy access to form fields
  get loginformsvalidForm() { return this.loginForm.controls; }

  PasswordShow() {
    
      var x = (<HTMLInputElement>document.getElementById('password'));
      if (x.type === "password") {
        x.type = "text";
        $('#glst').removeClass('glyphicon-eye-open'); 
        $('#glst').addClass('glyphicon-eye-close');
       // toggle our classes for the eye icon
      } else {
        x.type = "password";
        $('#glst').addClass('glyphicon-eye-open'); 
        $('#glst').removeClass('glyphicon-eye-close');
      }
  }

  onLogin() {
    this.submitted = true;
console.log(this.loginForm.value);

    // add login logic here...
    // this.router.navigate(['/home']);
  }
  resetPassword() {
console.log(this.userAddressValidations.value);
$("#pwdModal").modal('hide');
  }
  
}
