import { Component, Inject, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//service
import { BorrowerserviceService } from '../../services/borrowerservice.service';
//alert service
import { AlertService } from '../../services/alert.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-borrow-landing',
  templateUrl: './borrow-landing.component.html',
  styleUrls: ['./borrow-landing.component.css']
})
export class BorrowLandingComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) {

  }
  createBorrowerregtype() {
    this.router.navigate([`./borrowerRegtype/`]);
  }
  ngOnInit() {

  }

}
//open borrower popup start
@Component({
  selector: 'borrowerregpopup',
  templateUrl: 'borrowerpopup.component.html',
  styleUrls: ['./borrowerreg.component.css'],
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
export class borrowerregpopup implements OnInit {
  public message: any;
  public borrower_type: any;
  public success_message: string;
  public mobileNo: string;
  public error_message: boolean
  public buttonName: any;
  public pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
  public mobnumPattern = /[5-9]{5,9} /;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private Borrowerservice: BorrowerserviceService,
    private alertService: AlertService,
    public dialog: MatDialog,
  ) {
    this.borrower_type = localStorage.getItem('borrower_type')
    console.log(localStorage.getItem('borrower_type'));
  }


  ngOnInit() {
  }
  //open termsofuse popup
  terms() {

    //  this.borrewerRegRef.close();
    const dialogRef = this.dialog.open(termsofusepopup, {
      width: '800px',
      height: '85%',

    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog sent: ${result}`);
      
      //this.name = result;
    });

  }

  //privacypopup
  privacy() {
    const dialogRef = this.dialog.open(privacypolicypopup, {
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
      this.Borrowerservice.verifyotp(checkmobilenuber).subscribe(data => {
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
  public Otpsent: any
  sendotp(mobileno: any) {
    let userMobile = { userMobileNo: mobileno }
    if (mobileno.length == 10) {
      this.buttonName = 'Resend OTP'
      this.Borrowerservice.generateOtp(userMobile).subscribe(data => {
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
      // alert("Invalid mobile Number")
    }

  }
  //verifyotp
  public verified;
  public invalidotp
  verifyotp(otpcheck, MobileNo) {
    let userData = {
      userMobileNo: MobileNo,
      userOtp: otpcheck
    }
    console.log(otpcheck);
    if (otpcheck.length == 6) {

      this.Borrowerservice.verifyotp(userData).subscribe(data => {
        if (data == 'OTP verified') {
          this.verified = data;
          this.Otpsent = !this.Otpsent
          this.error_message = this.error_message
          this.invalidotp = false;
        }
        else {
          this.invalidotp = data;
          console.log(this.invalidotp);
        }
      });
    }
    else {

    }
  }
  model: any = {};
  //form submit
  borrowerRegForm(borroersreg: any, isValid: boolean) {
    if (!isValid) {
      console.log('Personal Form is not valid');
      console.log(borroersreg, isValid);
    } else {
      console.log('Personal Form is valid');
      console.log(borroersreg, isValid);
      this.Borrowerservice.borrowerreg(borroersreg).subscribe(data => {
        console.log("backend daattaaaaaa", data)
        if (data == 'success') {
          localStorage.removeItem("borrower_type");
          const dialogRef = this.dialog.open(successRegpopup, {
            disableClose: true,
            width: '512px',
            height: '28%',
             position: {
             top: '115px'
             }

          })
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

          });

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
  templateUrl: 'suceessRegpopup.component.html',
  styleUrls: ['./borrowerpopup.component.css']
})
export class successRegpopup {

  constructor(
    public dialogRef: MatDialogRef<successRegpopup>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    dialogRef.disableClose = true;
  }

  Successregisteration() {
    this.router.navigate(['/login']);
    return false;
  }


}
//termsofusecomponentpopup
@Component({
  selector: 'termsofusepopup',
  templateUrl: 'termsofusepopup.component.html',
  styleUrls: ['./borrowerpopup.component.css']
})
export class termsofusepopup {

  constructor(
    private alertService: AlertService,
    public termsofpopupRef: MatDialogRef<termsofusepopup>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private router: Router) { }


  closepopup() {

    this.termsofpopupRef.close();
  }


}

//privacypolicypopup
@Component({
  selector: 'privacypolicypopup',
  templateUrl: 'privacypolicypopup.component.html',
  styleUrls: ['./borrowerpopup.component.css']
})
export class privacypolicypopup {

  constructor(
    public privacypoRef: MatDialogRef<privacypolicypopup>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }


  closepopup() {
    this.privacypoRef.close();
  }
  onFilterChange() {
    console.log('filter change called');
  }
}
