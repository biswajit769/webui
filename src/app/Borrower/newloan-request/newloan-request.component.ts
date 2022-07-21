import { Component, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-newloan-request',
  templateUrl: './newloan-request.component.html',
  styleUrls: ['./newloan-request.component.css']
})
export class NewloanRequestComponent implements OnInit {
  @ViewChild('rateofinterst') rateofinterst: ElementRef;
  @ViewChild('nolender') nolender: ElementRef;
  @ViewChild('helppage') helppage: ElementRef;
  @ViewChild('availableamountpopup') availableamountpopup: ElementRef;
  @ViewChild('suceessloan') suceessloan: ElementRef;
  public newloanForm: FormGroup;
  constructor(public request: BorrowerserviceService, private formBuilder: FormBuilder, private commonService: LoginService, private router: Router) { }
  current_user: any;
  availableamount: any;
  ratesList:any = [];
  ngOnInit() {
    this.newloanForm = this.formBuilder.group({
      loan_amount: ['', [Validators.required]],
      tenure: ['', [Validators.required]],
       // repayment_type: ['', [Validators.required]]
    });
    this.commonService.current_user.subscribe((data: any) => {
      this.current_user = data;
      this.availableamount = this.current_user.role.available_amount;
      console.log('sucesssss', this.availableamount);

    });
      $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
  }



 ddays = [{ text: '0.5%-1%', value: 1 },
  { text: '1%-1.5%', value: 2 },
  { text: '1.5%-2%', value: 3 },
  { text: '2%-2.5%', value: 4 },
  
  ];

   
  public repayment_types = ['One Time Payment', 'Pay Monthly'];
   public repayment_typess = [30,45,60,90];
  //  public purpose = ['Education', 'Marriage/Special Occasion', 'Debt Consolidation', 'Healthcare', 'Vehicle Purchase', 'Vacation', 'Home Construction/Renovation', 'Business Loan', 'Emergency Loan', 'Personal expenses', 'Other'];
  selectedFile: File;
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  public error_msg;
  UploadInvoice(event) {
    console.log("Fileeeeeeefrom event", event);

    var extension = (event.target.files[0].name.split('.').pop())
    if (extension !== 'pdf') {

      this.error_msg = "Please upload only pdf File....";
    } else {
      this.selectedFile = event.target.files[0];
      this.error_msg = '';
    }


  }


    days = [];
  public applyloanDetails: any;

  public newloan1: any = {}
  getrateofInterstLendrlist(data: any) {
    console.log("helooo", data)
    this.applyloanDetails
    this.applyloanDetails = new FormData();
    this.applyloanDetails.append('invoice', this.selectedFile);
    this.applyloanDetails.append('loan_amount', data.loan_amount);
    this.applyloanDetails.append('repayment_type', data.repayment_type);
    this.applyloanDetails.append('tenure', data.tenure);
    this.applyloanDetails.append('rateOfInterestRange', this.days);
    // if (data.loan_amount == '0') {
    //   $(this.availableamountpopup.nativeElement).modal('show');
    // }
    // else if (data.loan_amount <= this.availableamount) {
      this.request.raiselon2(this.applyloanDetails).subscribe(data => {
       console.log(data,"dasaaaaa")
        if (data=='You have successfully applied for a loan') {
          console.log("sucess loan applied", this.applyloanDetails);
          $(this.suceessloan.nativeElement).modal('show');
        }

          else {
      $(this.availableamountpopup.nativeElement).modal('show');
    }

      })
      console.log("dddddddddd", this.applyloanDetails);
      // this.request.getintrestoflender().subscribe(data =>{
      //   if(data.length == 0){

      //     $(this.nolender.nativeElement).modal('show');
      //   }
      //   else{
      //     $(this.rateofinterst.nativeElement).modal('show');

      //   }
      //    this.newloan1=data
      //     console.log("dataaaaaa1",data);
      //   });

    // }
  
  }

  public error: any
  public arr1 = [];
  selectinterest1(data) {
    var idx = this.arr1.indexOf(data);
    if (idx > -1) {
      this.arr1.splice(idx, 1);
    } else {
      this.arr1.push(data);
    }
  }

  raiseloan() {
    if (this.arr1.length > 0) {
      this.error = "";
      $(this.rateofinterst.nativeElement).modal('hide');
      var loandata = JSON.stringify(this.arr1)
      this.applyloanDetails.append('loan', loandata)
      this.request.raiselon2(this.applyloanDetails).subscribe(data => {
        $(this.suceessloan.nativeElement).modal('show');
      })
    }
    else {
      this.error = "Please check at least one ROI";
    }
  }
  help() {
    $(this.helppage.nativeElement).modal('show');
  }
  close() {
    this.applyloanDetails = '';
    this.router.navigate(['Borrower_Dashboard/Borrower_Dashboardview']);

  }

  public checksLength:any;
  public show1:any;
  onSearchChange(searchValue: string) {
    this.checksLength = searchValue;
    if (this.checksLength == null || this.checksLength == "" || +(this.checksLength.length) <= 1) {
      if (this.checksLength >= '1') {
        this.show1 = false;
      }
      else {
        this.show1 = true;
      }
    }
    else if (this.checksLength == null || this.checksLength == "" || +(this.checksLength.length) <= 2) {
      if (this.checksLength <= '36') {
        this.show1 = false;
      }
      else {
        this.show1 = true;
      }

    }
  }
}






























































































































































