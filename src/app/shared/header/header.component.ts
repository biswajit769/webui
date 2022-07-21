import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router,RouterModule,NavigationEnd} from '@angular/router';
declare var $
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
  	private commonService:LoginService,
  	private route:Router
  	) { }
// loggedIn:any=false;
current_user:any=0;
  ngOnInit() {
    this.route.events.subscribe((event) =>{
      console.log("eveeeeeentttttttttt",event);
      if (event instanceof NavigationEnd){
        console.log("urll@@@@@@@@@@@@@@@@",event.url)
        if ((event.url == "/lenderdashboard") ||
          (event.url=='/viewprofile') ||
          (event.url=='/rateofinterest')||
          (event.url=='/loanrequest')||
          (event.url=='/loanhistory')||
          (event.url=='/todaysdues')||
          (event.url=='/loanExtension')||
          (event.url=='/latepayments')||
          (event.url=='/Borrowerremarks')||
          (event.url=='/pendingdocs')||
          (event.url=='/Helpspage')||
          (event.url=='/Borrower_Dashboard/Dashboard-Details')||
          (event.url=='/Borrower_Dashboard/View-Borrow-Profile')||
          (event.url=='/Borrower_Dashboard/invoices')||
          (event.url=='/Borrower_Dashboard/Newloan-Request')||
          (event.url=='/Borrower_Dashboard/Loan-History')||
          (event.url=='/Borrower_Dashboard/Borrower-Latepayment')||
          (event.url=='/Borrower_Dashboard/Upload_Docs')||
          (event.url=='/Borrower_Dashboard/Help')||
          (event.url=='/admin')||
          (event.url=='/admin/admin-home')||
          (event.url=='/admin/manageloans')||
          (event.url=='/admin/nbfcInitialRegistration')||
          (event.url=='/admin/managefee')||
          (event.url=='/admin/manageborrower')||
          (event.url=='/admin/managelenders')||
          (event.url=='/admin/payinfo')||
          (event.url=='/admin/paymentinfo')||
          (event.url=='/admin/paymentinfo/paymentdues')||
          (event.url=='/admin/manageloans/pendingloans')||
          (event.url=='/admin/manageloans/acceptedloans')||
          (event.url=='/admin/manageloans/dibursedloans')||
          (event.url=='/admin/manageloans/closedloans')||
          (event.url=='/admin/manageloans/defaulters')||
          (event.url=='/admin/manageCompanyProcess')||
          (event.url=='/admin/manageCompletedProcess')||
          (event.url=='/admin/registerednbfc')||
          (event.url=='/admin/nonkarnataka') ||
          (event.url=='/invoices') ||
          (event.url=='/crm/crm-dashbord')
         
          ){
          console.log("innnnsiiiddeeeeeeeeee ifffffffffff showHead showHead showLogout showLogout");
        
        }
        else {
          console.log("innnnsiiiddeeeeeeeeee iffffffffff showHead showHead showLogout showLogout");
        
        }
          
        
      }
    })


    this.commonService.current_user.subscribe((data: any) => {
    	this.current_user=data;
  });

}
logout(){
  this.commonService.changeCurrentUser(0);
  this.route.navigate(['/home']);
  localStorage.clear();
  localStorage.removeItem('currentUser');
  localStorage.removeItem('Timer');
}

closeMenu(){
  $(document).on('click',function(){
    $('.collapse').collapse('hide');
 })
  }; 
}

