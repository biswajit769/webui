import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LenderserviceService} from '../../services/lenderservice.service';

declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   // @ViewChild('Finalreg') Finalreg:ElementRef;
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  get f() { return this.loginForm.controls; }

  loginForm: FormGroup;
  public submitted = false;
  public error_message: any;
   show = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    public  lend:LenderserviceService,
   

  ) { }



 
  current_user: any = 0;
  ngOnInit() {

    this.loginService.current_user.subscribe((data: any) => {
      this.current_user = data;
    });
    this.loginForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public recalll(data:any) {
    this.loginService.changeCurrentUser(data);
  }


     @ViewChild('Finalreg') Finalreg:ElementRef;

  login(loginForm:any): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(loginForm.value).subscribe(data => {
      this.error_message = data.Error;
      console.log("swathiiiiiiiiiiiiiiii",data);
      this.loginService.logdata = data;
      // this.lend.lenderobj = data;

      if (data.token) {
        localStorage.setItem('token', data['token'])
        if (data['role']['role'] == 'borrower') {
          console.log("Role id",data.role.id);
          localStorage.setItem('borrowerid',data.role.id);
          this.recalll(data);
          if (data['role']['acounttypes'] == null) {
           this.router.navigate(['Borrower_Dashboard']);
           
          } 
          else{
          this.router.navigate(['Borrower_Dashboard']);
          //  if(data.role.companytype){
          //   this.recalll(data);
          //   this.router.navigate(['/Borrower_Dashboard/Dashboard-Details']);
          //        }
          //     else{
          //       this.recalll(data);
          //    this.router.navigate(['/BorrowingCompanyRegistration']);
          //       }
        }
      }
        else if (data['role']['role'] == 'NBFC') {
          this.recalll(data);
          this.router.navigate(['lenderdashboard']);

          // if(data.role.companytype){
          //   this.recalll(data);
          //   this.router.navigate(['lenderdashboard']);
          // }
          // else{
          //   this.recalll(data);
          //   this.router.navigate(['/customers']);
          // } 
        }
        else if (data['role']['role'] == 'ADMIN') {
          this.recalll(data);
          this.router.navigate(['admin']);
        }
        else if (data['role']['role'] == 'CRM') {
          this.recalll(data);
          this.router.navigate(['crm/crm-dashbord']);
        }
      }
    })
  };



    public shows:boolean = false;
  public buttonName:any = 'fa-eye-slash';

  showpassword() {
 this.shows = !this.shows;
    if(this.shows)  
      this.buttonName = "fa-eye";
      // this.loginForm.value.password = 
    else
      this.buttonName = "fa-eye-slash";
  }
}


