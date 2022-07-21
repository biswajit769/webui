import { BorrowerserviceService } from '../../services/borrowerservice.service';
import { Component, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { takeLast } from 'rxjs/operators';
declare var $;

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {
  @ViewChild('loandisbursed') loandisbursed: ElementRef;
  @ViewChild('loandetailsViewpopup') loandetailsViewpopup: ElementRef;
  @ViewChild('logPoper') logPoper: ElementRef;
  @ViewChild('DocumentPoper') DocumentPoper: ElementRef;


  constructor(private borrowerservice: BorrowerserviceService, public loginService:LoginService,
                  public route:Router) 
  {
                   this.profilecheck(); }

  public logcredentials;
  ngOnInit() {
      this.getAllActiveLoans()
      this.disburse_loan();
     
     

  }
  currentpages = 5;
  itemsperPage = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '25', label: '25' }
  ];
  public disbrsloans: any = [];
  public acceptedloans: any = [];
  public pendingloans: any = [];
  public extendedloans: any = [];
  public status_message: string;
  public disbursed_loanlist: any = [];
  public accepted_loanlist: any = [];
  public pendingloans_loanlist: any = [];
  public extendedloans_loanlist: any = [];

  j = 0;
  f: number;
//check profile fields
public profilecheck(){
  this.borrowerservice.companyprofileview().subscribe(
      data => {
        console.log("dataaaaaa",data);
   let current_user = data;

console.log(current_user['Balance_sheet'],"Balance_sheet");
console.log(current_user['bank_stmnt_borwr'],"bank_stmnt_borwr");
console.log(current_user['Business_pan_file'],"Business_pan_file");
console.log(current_user['present_address_proof'],"present_address_proof");
if (current_user['acounttypes'] == null) {
  $(this.logPoper.nativeElement).modal('show')
}else if(current_user['Balance_sheet'] == null || current_user['Business_pan_file'] == null || 
current_user['bank_stmnt_borwr'] == null ||
current_user['present_address_proof'] == null){
$(this.logPoper.nativeElement).modal('show')

      }
   

});

}




  public getAllActiveLoans() {
    this.borrowerservice.getActivaLoans().subscribe(
      data => {
        console.log("kkkkkkkkkkk", data);
        for (this.j = 0; this.j < data.length; this.j++) {
          if (data[this.j].status == "Disbursed") {
            this.disbrsloans = data[this.j];
            this.disbursed_loanlist.push(this.disbrsloans);
            console.log("disbrsloans", data);
          }
          else if (data[this.j].status == "Accepted") {
            this.acceptedloans = data[this.j];
            this.accepted_loanlist.push(this.acceptedloans);
            console.log("acceptedloans", data);
          }
          else if (data[this.j].status == "Pending") {
            this.pendingloans = data[this.j];
            this.pendingloans_loanlist.push(this.pendingloans);
            console.log("pendingloans", data);
          }
          else if (data[this.j].status == "Extended") {
            this.extendedloans = data[this.j];
            this.extendedloans_loanlist.push(this.extendedloans);
            console.log("extendedloans", data);
          }
          else if (data[this.j].status == "Closed") {
            this.extendedloans = data[this.j];
            this.extendedloans_loanlist.push(this.extendedloans);
            console.log("Closedloans", data);
          }

        }
      },
      error => {
        this.status_message = "problem with service.please try again"
      }
    );

  }
  //  userFilter: any = { 
  //    federation_name: ''
  //    };
  //initializing page to one
  pager1: number = 1;
  pager2: number = 1;
  pager3: number = 1;
  pager4: number = 1;
  //disburse loan
  loanView;
  loanid;
  results;
  i;
  c = 0;
  public len
  public disburse_loan() {
    this.borrowerservice.getdisburseLoanlist().subscribe(data => {
      this.loanView = data;
      this.popup1();
      clearInterval(this.closeinterval);

    })
  }
  popup1() {
    this.len = this.loanView.length;
    if (this.len == this.i) {
      $(this.loandisbursed.nativeElement).modal('hide');
    }
    else {
      for (let k = 0; k < this.loanView.length; k++) {
        this.results = this.loanView[k].fields.notified;
        if (!this.results) {
          this.show4 = false;
          this.loanid = this.loanView[k].pk;
          $(this.loandisbursed.nativeElement).modal('show');
        }
        this.c = k;
      }
    }
  }
  public show4: boolean;
  popup2() {
    this.show4 = false;
    let tes = this.c - 1;
    console.log(this.loanView, tes, this.c);
    this.results = this.loanView[tes].fields.notified;
    console.log("hiiii", this.results);
    if (!this.results) {
      this.loanid = this.loanView[tes].pk;
      console.log(this.loanid);
      console.log('resulttttttttt', this.results);
      this.c = tes;
      $(this.loandisbursed.nativeElement).modal('show');
    }
    else {
      $(this.loandisbursed.nativeElement).modal('hide');
    }

  }

  public closeinterval: any
  checkDisbursedLoan(loaid) {
    this.borrowerservice.notify_disbursedloan(loaid).subscribe(data => {
      if (data) {
        $(this.loandetailsViewpopup.nativeElement).modal('hide');
        this.closeinterval = setInterval(() => {
          this.disburse_loan();
        }, 500);
      }
    })
    this.popup1();
     $(this.loandisbursed.nativeElement).modal('hide');


  }


  ngOnDestroy() {
    if (this.closeinterval) {
      clearInterval(this.closeinterval);
    }
  }
  closeDisbursedLoan(loaid: any) {
    this.popup2();
     $(this.loandisbursed.nativeElement).modal('hide');


  }


  showtab1 = true;
  showtab2: boolean;
  showtab3: boolean;
  showtab4: boolean;
  activeloanstab() {
    this.showtab1 = true;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = false;
  }
  acceptedloanstab() {
    this.showtab1 = false;
    this.showtab2 = true;
    this.showtab3 = false;
    this.showtab4 = false;
  }
  pendinloanstab() {
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = true;
    this.showtab4 = false;
  }
  public closedLoan;
  public closeCount;
  extendedloantab() {
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = true;
  }
  public loanviews;
  public lender_bankdetalis: any;
  public company_Disbursed: any = [];
  public company_Disbursed_list: any = [];
  d = 0;
  loandetailsView(details) {
    this.company_Disbursed_list = [];
    this.loanviews = details;
    this.loanid = details.id
    this.borrowerservice.getlender_bank_details(this.loanid).subscribe(data => {
      if (data) {
        this.show4 = true;
        console.log('hellooooooooooo', data)
        this.lender_bankdetalis = data;
        $(this.loandetailsViewpopup.nativeElement).modal('show');
      }
    })
    this.borrowerservice.getdisbursedloan_details(this.loanid).subscribe(data => {
      if (data) {
        for (this.d = 0; this.d < data.length; this.d++) {
          this.company_Disbursed = data[this.d].fields;
          this.company_Disbursed_list.push(this.company_Disbursed);
          this.show4 = true;
          $(this.loandetailsViewpopup.nativeElement).modal('show');
        }


      }
      console.log('testttttttt', this.company_Disbursed_list)
    })
    if (this.lender_bankdetalis && this.company_Disbursed) {

    }


  }


  GotoPage(){
    this.route.navigate(['/BorrowingCompanyRegistration'])
  }
  // GotoPage1(){
  //           this.route.navigate(['/Borrower_Dashboard/Upload_Docs']);
  // }

}

