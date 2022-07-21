import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd,NavigationStart } from '@angular/router';
@Component({
  selector: 'app-invoicemanagement',
  templateUrl: './invoicemanagement.component.html',
  styleUrls: ['./invoicemanagement.component.css']
})
export class InvoicemanagementComponent implements OnInit {

  constructor(private router:Router) { }
public hideheader:boolean=false;
public hideheader1:boolean=false;
  ngOnInit() {
  
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {

        if ((event.url === '/login') || (event.url === '/resetpassword') || (event.url === '/forgotpassword') || (event.url === '/customers') || (event.url === '/BorrowingCompanyRegistration') || (event.url === '/CompanyInitialRegistration')) {
          console.log("hiiiiii");
          this.hideheader = true;
        }
        else if ((event.url === '/invoicemanagent/invoicemanagementadmin/Invoiceadmindashborad') || (event.url === '/Borrower_Dashboard/invoices') || (event.url === '/Borrower_Dashboard/View-Borrow-Profile') || (event.url === '/Borrower_Dashboard/Newloan-Request') || (event.url === '/Borrower_Dashboard/Help') || (event.url === '/Borrower_Dashboard/Loan-Extension')
          || (event.url === '/Borrower_Dashboard/Loan-History') || (event.url === '/Borrower_Dashboard/Borrower-Latepayment') || (event.url === '/Borrower_Dashboard/Upload_Docs') || (event.url === '/Borrower_Dashboard/Request-By-Lender') || (event.url === '/Borrower_Dashboard/**')) {
            alert(123);
          this.hideheader1 = true;
        }

        else if ((event.url === '/closedloans') || (event.url === '/Borrowerremarks') || (event.url === '/Helpspage')
          || (event.url === '/latepayments') || (event.url === '/loanExtension') || (event.url === '/loanhistory') || (event.url === '/loanrequest') || (event.url === '/pendingdocs') || (event.url === '/rateofinterest') || (event.url === '/Searchborrower') || (event.url === '/todaysdues') || (event.url === '/payinfo') || (event.url === '/lateanddelay') || (event.url === '/**') || (event.url === '/viewprofile') || (event.url === '/lender')) {

          this.hideheader1 = true;
        }
      
       
    

      }


    });
    
  }

}
