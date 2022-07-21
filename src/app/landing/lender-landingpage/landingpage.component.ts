import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//service
import { LenderserviceService } from '../../services/lenderservice.service';
import { AlertService } from '../../services/alert.service';
//alert service
// import { routerTransition } from '../../animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(public router: Router) { }

  createaccpop() {
    this.router.navigate([`./landinginitialReg/`]);
  }

  ngOnInit() {
  }

}
//open borrower popup start
@Component({
  selector: 'landingregpopup',
  templateUrl: 'lenderpopupreg.component.html',
  styleUrls: ['./landingreg.component.css'],
  animations: [trigger('routerTransition', [
    state('void', style({ position: 'relative', width: '100%' })),
    state('*', style({ position: 'relative', width: '100%' })),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
  ]),],
  host: { '[@routerTransition]': '' }
})
export class landingregpopup implements OnInit {
  public model: any = {};
  message: any;
  public success_message: string;
  public mobileNo: string;
  public error_message: boolean
  public buttonName: any;
  public pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
  public mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private LenderService: LenderserviceService,
    private alertService: AlertService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit() {

  }
  //open termsofuse popup
  terms() {
    //  this.borrewerRegRef.close();
    const dialogRef = this.dialog.open(termsofusepopuppage, {
      width: '800px',
      height: '87%',

    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog sent: ${result}`);
      //this.name = result;
    });

  }

  //privacypopup
  privacy() {

    const dialogRef = this.dialog.open(privacypolicypopuppage, {
      width: '800px',
      height: '85%',

    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog sent: ${result}`);
    });

  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress1(event: any) {
    const pattern = /^[a-zA-Z_ ]*$/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  //check mobilenumber is already regisetred
  checkMobileNumber(mobilenumberstest: string) {
    let checkmobilenuber = {
      userMobileNo: mobilenumberstest
    }
    console.log(checkmobilenuber);
    if (mobilenumberstest.length == 10) {
      // this.buttonName = "Send OTP"; 
      this.LenderService.verifyotp(checkmobilenuber).subscribe(data => {
        if (data.a == 1) {
          this.mobileNo = data.msg.mobilenumber;
          console.log(this.mobileNo);
          localStorage.setItem('mobileNo', this.mobileNo);

        }
        else {
          this.error_message = data;
          alert(this.error_message)
        }
      });
    }
    else {

    }
  }
  //Generate otp
  public Otpsent
  sendotp(mobileno) {

    let userMobile = { userMobileNo: mobileno }
    if (mobileno.length == 10) {
      // this.buttonName = 'Resend OTP'
      this.LenderService.generateOtp(userMobile).subscribe(data => {
        if (data == 'OTP sent') {
          this.Otpsent = data
          this.mobileNo = data;
          this.error_message = false;
          this.invalidotp = false;
          this.verified = false;
        }
        else {
          this.error_message = data;
          this.Otpsent = false;
          this.invalidotp = false;
          this.verified = false;
        }
      });
    }
    else {
     
    }

  }
  //verifyotp
  public verified;
  public invalidotp;
  // verifyotp(otpcheck, MobileNo) {
  //   let userData = {
  //     userMobileNo: MobileNo,
  //     userOtp: otpcheck
  //   }
  //   console.log(otpcheck);
  //   if (otpcheck.length == 6) {

  //     this.LenderService.verifyotp(userData).subscribe(data => {
  //       if (data == 'OTP verified') {
  //         this.verified = data;
  //         this.Otpsent = !this.Otpsent
  //         this.error_message = this.error_message
  //         this.invalidotp = false;
  //       }
  //       else {
  //         this.invalidotp = data;
  //         console.log(this.invalidotp);
  //       }
  //     });
  //   }
  //   else {

  //   }
  // }

  //form submit
  lenderSubmit(lenderReg, isValid: boolean) {
    if (!isValid) {
      console.log('Personal Form is not valid');
      console.log(lenderReg, isValid);
    } else {
      console.log('Personal Form is valid');
      console.log(lenderReg, isValid);
      this.LenderService.lenderreg(lenderReg).subscribe(data => {
        console.log("backend daattaaaaaa", data)
        if (data == 'success') {

          const dialogRef = this.dialog.open(lendersuccessRegpopup, {
            disableClose: true,
            width: '512px',
            height: '28%',
          
           position: {
             top: '115px'
             }



          })
        }
        else if (data == 'User Already Exists') {
          alert("User Already Exists");

        }
        else {
          alert("enter valid data");
        }
      },
      )

    }
  }

}
//end comp0netpopup above....
@Component({
  selector: 'successRegpopup',
  templateUrl: 'sucessRegispopup.component.html',
  styleUrls: ['./lenderpopupcss.component.css']
})
export class lendersuccessRegpopup {

  constructor(
    public dialogRef: MatDialogRef<lendersuccessRegpopup>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  Successregisteration() {
    this.router.navigate(['/admin/managelenders']);
    return false;
  }


}
//termsofusecomponentpopup
@Component({
  selector: 'termsofusepopup',
  templateUrl: 'termsofusepopuppage.component.html',
  styleUrls: ['./lenderpopupcss.component.css']
})
export class termsofusepopuppage {

  constructor(
    private alertService: AlertService,
    public termsofpopupRef: MatDialogRef<termsofusepopuppage>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private router: Router) { }
  closepopup() {

    this.termsofpopupRef.close();
  }
}

//privacypolicypopup
@Component({
  selector: 'privacypolicypopup',
  templateUrl: 'privacypolicypopuppage.component.html',
  styleUrls: ['./lenderpopupcss.component.css']
})
export class privacypolicypopuppage {

  constructor(
    public privacypoRef: MatDialogRef<privacypolicypopuppage>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }


  closepopup() {
    this.privacypoRef.close();
  }
  onFilterChange() {
    console.log('filter change called');
  }
}