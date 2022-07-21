
import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import  { LoginService } from '../../services/login.service';
import { RegistrationValidator } from '../../shared/register.validator';
declare var $
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild('Resetpopup') Resetpopup:ElementRef;
  submitted = false;
private mobile = localStorage.getItem('mobileNo');
error_message :string;
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  get f() { return this.passwordFormGroup.controls; }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
         private router: Router,
        private resetservice: LoginService) {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    }, {
      validator:[RegistrationValidator.validate.bind(this)]
    });
    this.registrationFormGroup = this.formBuilder.group({
     
      passwordFormGroup: this.passwordFormGroup
    });
   }

  ngOnInit() {
  }
    onClickRegister(registrationFormGroup:any): void {
    this.submitted = true;
    if ((registrationFormGroup.value.password.length == 0 || registrationFormGroup.value.password == null || registrationFormGroup.value.password === "" || registrationFormGroup.value.password == undefined)||(registrationFormGroup.value.repeatPassword.length == 0 || registrationFormGroup.value.repeatPassword == null || registrationFormGroup.value.repeatPassword === "" || registrationFormGroup.value.repeatPassword == undefined)) {
        
        }
    
    else {
let data={'password':registrationFormGroup.value.password,'repeatPassword':registrationFormGroup.value.repeatPassword,'userMobileNo':this.mobile}    
this.resetservice.resetpassword(data).subscribe( data => {
 
    if(data =="Password has been successfuly reset"){
      localStorage.removeItem('mobileNo');
      $(this.Resetpopup.nativeElement).modal('show');
        }
    else {
      this.error_message = data;
    
      } 
    },)

}
  }

  ok(){
    
    $(this.Resetpopup.nativeElement).modal('hide');
    this.router.navigate([`./home/`]);
  }
  
}