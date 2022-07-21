
import { LenderserviceService } from '../../services/lenderservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
declare var $
@Component({
  selector: 'app-lender-dashboard',
  templateUrl: './lender-dashboard.component.html',
  styleUrls: ['./lender-dashboard.component.css']
})
export class LenderDashboardComponent implements OnInit {
  @ViewChild('disburseviewPopup') disburseviewPopup: ElementRef;
  @ViewChild('closedloan') closedloan: ElementRef;
  @ViewChild('loandetailsView') loandetailsView: ElementRef;
  @ViewChild('bankdetailsView') bankdetailsView: ElementRef;
  @ViewChild('EneterAmountpopup') EneterAmountpopup: ElementRef;
  @ViewChild('acceptpopup') acceptpopup: ElementRef;
   @ViewChild('invoicepopup') invoicepopup: ElementRef;
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  public paymentModemethods = ['IMPS', 'NEFT', 'UPI', 'CASH']
  public userFilter: any;
  public deduction: any;
  public viewhistory: any = [];
  public loans: any = [];
  public status_message: string;
  constructor(private lenderservicess: LenderserviceService, private router: Router) { }
  ngOnInit() {
    this.getlenderactiveloans();
    this.getrateofinterest();
  }

  acceptedloan;
disburseloan;
findate;
intr;
  getrateofinterest() {
    this.lenderservicess.interestservice().subscribe(data => {
      console.log("!@@@@@@@@@@@@@@@@@@@@@",data);
      this.acceptedloan = data['accptloan']
      console.log("Accpetdloannnnnnnnnnnnnnnnn",this.acceptedloan);
      this.disburseloan = data['discount']
      console.log("disbursloannnnnnnn",this.disburseloan);
      this.findate = data['interest'][0]['date_of_establishment'];
      console.log("hdhhhhhh",this.findate);
      this.intr = data['interest'] [0] ['interest_rate']
       this.router.navigate(['/lenderdashboard']);
    });
  }

  getlenderactiveloans() {
    this.lenderservicess.getlenderactiveloans().subscribe(data => {
      this.viewhistory = data;
      console.log("active loans", this.viewhistory);
    });
  }
  public loan: any;
  disburse(loan_id:any) {
    this.loan = loan_id
    $(this.disburseviewPopup.nativeElement).modal('show');
  }
  public disburses: any
  public finchain_disbursement;
  public borrower_disbursement;
  public AmountName;
  public PaymentMode;
  public enter_Remarks;
  cancel1() {
    $(this.disburseviewPopup.nativeElement).modal('hide');
    $(this.EneterAmountpopup.nativeElement).modal('hide');
    this.finchain_disbursement = '';
    this.borrower_disbursement = '';
    this.AmountName = '';
    this.PaymentMode = '';
    this.enter_Remarks = '';

  }

  //close loan
  public close_loan_id
  changestatus(loan_id) {
    this.close_loan_id = loan_id;
    $(this.closedloan.nativeElement).modal('show');
  }
  closeloanstatus() {
    let data = { 'loan_id': this.close_loan_id }
    console.log("#######", data);
    this.lenderservicess.closedloanstatus(data).subscribe(data => {
      if (data) {
        $(this.closedloan.nativeElement).modal('hide');
        this.getlenderactiveloans();
        // this.router.navigate(['lender']);
      }
    });
  }
  //View loan details
  public show1: boolean = false;
  public show2: boolean = false;
  public disbursement: boolean = false;
  public loandetails: any;
  public loan_data: any;
  public lastdate: any;
  public len: any;
  public paid_amt: any;
  public account_number: any;
  public selected_bank;
  public branch_name;
  public ifsc_code;
  public holder_name;
  public loanrefrsh_data: any;
public companyData:any = {};

public invoices:any;

// Viewinvoices(){


//   console.log("weqeqqqqqqqqqqq",this.loanrefrsh_data);

// this.invoices=this.loanrefrsh_data.invoice;
// console.log("weqeqqqqqqqqqqq",this.invoices);

// $(this.invoicepopup.nativeElement).modal('show');
  
// }


Viewinvoices1(loan){


  console.log("weqeqqqqqqqqqqq",loan);
  this.invoices=loan;


   console.log("@@@@@@weqeqqqqqqqqqqq@@@",this.invoices);


 $(this.invoicepopup.nativeElement).modal('show');
 
 
}


closed(){
  // this.invoice = '';
  $(this.invoicepopup.nativeElement).modal('hide');
}


  loan_details(loan) {
    console.log("ewrewrew",loan);
    this.loanrefrsh_data = loan;
    this.show1 = true;
    if (loan.status == "Disbursed") {
      this.lenderservicess.getactiveloandetails(loan.id).subscribe(data => {
        if (data) {
          $(this.loandetailsView.nativeElement).modal('show');
          this.loandetails = data.data1;
          this.loan_data = data.data3[0];
          this.len = this.loandetails.length;
          this.lastdate = this.loandetails[this.len - 1].payable_date;
          this.paid_amt = data.data2.payable_amount__sum;
          this.disbursement = true;
          this.getlenderactiveloans();
          // this.router.navigate(['lender']);
        }
      });
    }
    else {
      this.lenderservicess.getborrowerdetails(loan.id).subscribe(data => {
        if (data) {
          console.log("helllllllllll", data);
          this.show2 = true;
          for (var _i = 0; _i < this.viewhistory.length; _i++) {
            if (this.viewhistory[_i].id == loan.id) {
              this.loan = this.viewhistory[_i];
              console.log(this.loan);
              $(this.bankdetailsView.nativeElement).modal('show');
              this.account_number = data.account_number;
              this.holder_name = data.holder_name;
              this.selected_bank = data.bank;
              this.branch_name = data.branch_name;
              this.ifsc_code = data.ifsc_code;
              this.disbursement = false;
            }

          }


        }
      });

    }
  }

  public loan_Id: any
  public transac_id:any;
  upfrontView(id) {
    this.loan_Id = id;
    console.log(id);
    $(this.acceptpopup.nativeElement).modal('show');
  }
  Enteramount(loanid) {
    this.loan = loanid;
    console.log('jiiiiiiiiiiiiiiii', this.loan);
    $(this.loandetailsView.nativeElement).modal('hide');
    $(this.EneterAmountpopup.nativeElement).modal('show');

  }
  SendPayment(amount:any, mode:any, remarks:any ,trnasid:any) {
    let data = {
      'paidamount': amount, 'transaction':trnasid ,'paymentmode': mode, 'status': remarks, 'loan_id': this.loan.loan, 'borrower_id': this.loan.borrower, 'borrower_name': this.loan.borrower_name,
      'repayment_amount': this.loan.repayment_amount, 'balance_amount': this.loan.loan__balance
    }
    console.log("sssssssss",data)
    this.lenderservicess.sendpaymentAmount(data).subscribe(data => {
      if (data == 'Updated') {
        this.AmountName = '';
        this.PaymentMode = '';
        this.enter_Remarks = '';
        this.loan_details(this.loanrefrsh_data);
        // $(this.loandetailsView.nativeElement).modal('show');
        $(this.EneterAmountpopup.nativeElement).modal('hide');
      }
    });
  }

  loanaccepted(deduc) {
    let data = { 'deduction': deduc, 'loan_id': this.loan_Id }
    this.lenderservicess.AcceptedLoans(data).subscribe(data => {
      if (data) {
        this.router.navigate(['lender']);
        $(this.acceptpopup.nativeElement).modal('hide');
      }
    });
  }
  // transactions details
  selectedFile: File
  processFile(event) {
  
    this.selectedFile = event.target.files[0];
    console.log("hiiiiiiiii",this.selectedFile)
  }
  disbursement_details(finch) {
     const uploadData = new FormData();
    uploadData.append('challen', this.selectedFile);
   // uploadData.append('borrower_disbursement',borrow);
   uploadData.append('finchain_disbursement', finch);
     uploadData.append('loan_id', this.loan);
    this.lenderservicess.AcceptedLoans(uploadData).subscribe(data => {
      if (data) {
        $(this.disburseviewPopup.nativeElement).modal('hide');
        this.getlenderactiveloans();
        this.getrateofinterest();
        // this.router.navigate(['lender']);
      }
    });
  }
 
    
}
