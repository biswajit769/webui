import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { LoginService } from './services/login.service';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'RTM Capital PVT LTD';
  public headerData = 0;
  public showHead;
  public showLogout;

  public hideElement2: boolean = false;

  public hideheader1: boolean = false;



  ngOnInit() {


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    // this.router.events.subscribe((event){
    //   if (event instanceof NavigationEnd){
    //     console.log("urlllllllllll",event.url)
    //     if (event['url']=='/lenderdashboard'){
    //       this.showHead=false; 
    //       this.showLogout=true;
    //     }
    //     else{
    //       this.showHead=true;
    //       this.showLogout=false;
    //     }
    //   }
    // })
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    setInterval(() => { this.headerData++; }, 250);
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  logout() {
    this.authenticationService.changeCurrentUser(0);
    this.router.navigate(['/home']);
  }
  hideElement = false;

  constructor(private router: Router, private authenticationService: LoginService, ) {
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', 'UA-146001360-1', { 'page_path': e.urlAfterRedirects });
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if ((event.url === '/login') || (event.url === '/resetpassword') || (event.url === '/forgotpassword') || (event.url === '/customers') || (event.url === '/BorrowingCompanyRegistration') || (event.url === '/CompanyInitialRegistration')) {
          console.log("hiiiiii");
          this.hideElement = true;
          this.hideElement2 = true;

          this.hideheader1 = false;
       

        }
        else if ((event.url === '/Borrower_Dashboard/Dashboard-Details') || (event.url === '/Borrower_Dashboard/invoices') || (event.url === '/Borrower_Dashboard/View-Borrow-Profile') || (event.url === '/Borrower_Dashboard/Newloan-Request') || (event.url === '/Borrower_Dashboard/Help') || (event.url === '/Borrower_Dashboard/Loan-Extension')
          || (event.url === '/Borrower_Dashboard/Loan-History') || (event.url === '/Borrower_Dashboard/Borrower-Latepayment') || (event.url === '/Borrower_Dashboard/Upload_Docs') || (event.url === '/Borrower_Dashboard/Request-By-Lender') || (event.url === '/Borrower_Dashboard/**')) {
          this.hideElement2 = true;
          this.hideElement = true;
        }

        else if ((event.url === '/closedloans') || (event.url === '/Borrowerremarks') || (event.url === '/Helpspage')
          || (event.url === '/latepayments') || (event.url === '/loanExtension') || (event.url === '/loanhistory') || (event.url === '/loanrequest') || (event.url === '/pendingdocs') || (event.url === '/rateofinterest') || (event.url === '/Searchborrower') || (event.url === '/todaysdues') || (event.url === '/payinfo') || (event.url === '/lateanddelay') || (event.url === '/**') || (event.url === '/viewprofile') || (event.url === '/lender')) {
          this.hideElement2 = true;
          this.hideElement = true;
        }
        else if ((event.url === '/lenderdashboard') || (event.url === '/invoices') || (event.url === '/Borrower_Dashboard') || (event.url === '/admin')) {
          this.hideElement = true;
          this.hideElement2 = true;

        }
        else if ((event.url == '/admin/admin-home') ||
          (event.url == '/admin/manageloans') ||
          (event.url == '/admin/nbfcInitialRegistration') ||
          (event.url == '/admin/managefee') ||
          (event.url == '/admin/manageborrower') ||
          (event.url == '/admin/managelenders') ||
          (event.url == '/admin/payinfo') ||
          (event.url == '/admin/paymentinfo') ||
          (event.url == '/admin/paymentinfo/paymentdues') ||
          (event.url == '/admin/manageloans/pendingloans') ||
          (event.url == '/admin/manageloans/acceptedloans') ||
          (event.url == '/admin/manageloans/dibursedloans') ||
          (event.url == '/admin/manageloans/closedloans') ||
          (event.url == '/admin/manageloans/defaulters') ||
          (event.url == '/admin/manageCompanyProcess') ||
          (event.url == '/admin/manageCompletedProcess') ||
          (event.url == '/admin/registerednbfc') ||
          (event.url == '/admin/nonkarnataka')) {
          this.hideElement = true;
          this.hideElement2 = true;

        }



        else if ((event.url === '/crm/crm-dashbord')) {
          this.hideElement = true;
        }

        else if ((event.url === '/') || (event.url === '/home') || (event.url === '/Aboutus') || (event.url === '/how-it-works') || (event.url === '/contactus') || (event.url === '/advantages') || (event.url === '/mediaroom')) {
          console.log("hiiiiii");
          this.hideElement2 = false;
          this.hideElement = false;
        }
        else if ((event.url === '/invoicemanagent/Invoice') || (event.url === '/invoicemanagent/Invoicelogin') || (event.url === '/invoicemanagent/signup2')) {
          console.log("hiiiiii:", event.url);
          this.hideheader1 = true;
          this.hideElement = true;
          this.hideElement2 = false;

        }
        else if ((event.url === '/invoicemanagent/invoicemanagementadmin/Invoiceadmindashborad')) {
          this.hideheader1 = true;
          this.hideElement = true;

        }
        else if ((event.url === '/finchainpay/finpayhome') || (event.url === '/finchainpay/about-us')||
        (event.url === '/finchainpay/flow-login')||(event.url === '/finchainpay/need-help')
        ||(event.url === '/finchainpay/termsnconditions')||(event.url === '/finchainpay/privacy-policy')||(event.url === '/finchainpay/shopping-loan')
        ||(event.url === '/finchainpay/offers')) {
          this.hideElement = true;
          
        }

        else {

          this.hideElement2 = false;
          this.hideElement = false;
          this.hideheader1 = false;
        }
      }

    });
  }

}
