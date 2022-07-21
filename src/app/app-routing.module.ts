import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-routing-loader';
//Import landing Components Here
import { HomeComponent } from './landing/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ForgotpasswordpageComponent } from './home/forgotpasswordpage/forgotpasswordpage.component';
import { ResetPasswordComponent } from './home/reset-password/reset-password.component';
import { AboutusComponent } from './landing/aboutus/aboutus.component';
import { ContactusComponent } from './landing/contactus/contactus.component';
import { MediaroomComponent } from './landing/mediaroom/mediaroom.component';
import { HowItWorksComponent } from './landing/how-it-works/how-it-works.component';
import { PrivacyPolicyComponent } from './landing/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './landing/terms-of-use/terms-of-use.component';
import { FaqComponent } from './landing/faq/faq.component';
import { BorrowLandingComponent, borrowerregpopup } from './landing/borrow-landing/borrow-landing.component';
import { FeesPricingComponent } from './landing/faq/fees-pricing/fees-pricing.component';
import { RegistrationComponent } from './landing/faq/registration/registration.component';
import { BorrowerfaqComponent } from './landing/faq/borrowerfaq/borrowerfaq.component';
import { LandingpageComponent, landingregpopup } from './landing/lender-landingpage/landingpage.component';

//borrower all pages
import { BorrowerLatepaymentComponent } from './Borrower/borrower-latepayment/borrower-latepayment.component';

import { DashboardDetailsComponent } from './Borrower/dashboard-details/dashboard-details.component';
import { LenderListComponent } from './Borrower/lender-list/lender-list.component';
import { LoanExtensionComponent } from './Borrower/loan-extension/loan-extension.component';
import { LoanHistoryComponent } from './Borrower/loan-history/loan-history.component';
import { NewloanRequestComponent } from './Borrower/newloan-request/newloan-request.component';
import { RequestbylenderComponent } from './Borrower/requestbylender/requestbylender.component';
import { ThankyoupageComponent } from './Borrower/thankyoupage/thankyoupage.component';
import { UploadDocsComponent } from './Borrower/upload-docs/upload-docs.component';
import { ViewBorrowerProfileComponent } from './Borrower/view-borrower-profile/view-borrower-profile.component';
import { HelpComponent } from './Borrower/help/help.component';
import { CompanyRegistrationComponent } from './Borrower/company-registration/company-registration.component';

import { LenderRegistrationsComponent } from './lender/lender-registrations/lender-registrations.component';
//authguards
import { AuthGuardGuard } from './auth-guard.guard';
import { AdvantagesComponent } from './landing/advantages/advantages.component';

import { NotFoundComponent } from './not-found/not-found.component';

const approutes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',

    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'forgotpassword',
    component: ForgotpasswordpageComponent,
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
  },
  {
    path: 'borrowerlandingpage',
    component: BorrowLandingComponent,
  },
  
  {
    path: 'CompanyInitialRegistration',
    component: borrowerregpopup,
    data: { state: "CompanyInitialRegistration" }
  },

  {
    path: 'landingpage',
    component: LandingpageComponent,
  },

  {
    path: 'termscondition',
    component: TermsOfUseComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'mediaroom',
    component: MediaroomComponent,
  },
  {
    path: 'Aboutus',
    component: AboutusComponent,
  },
  {
    path: 'advantages',
    component: AdvantagesComponent,
  },
  //crm lazy laoding

{
  path: 'crm',
  loadChildren: './crm/crm.module#CrmModule',
  canActivate: [AuthGuardGuard]
  },
  //borrower  lazy loading paths

{
  path: 'Borrower_Dashboard',
  loadChildren: "./Borrower/lazy-module-borrower.module#LazyModuleBorrowerModule",

},

 //admin lazyloading paths
 {
  path: 'admin',
  loadChildren: "./Admin/admin.module#AdminModule",
  data: { preload: true }


},


  
  // Borrower paths
  //lender lazy loading paths

  {
    path: '',
    loadChildren: "./lender/lender.module#LenderModule",
    
},

  {
    path: 'BorrowingCompanyRegistration',
    component: CompanyRegistrationComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'customers',
    component: LenderRegistrationsComponent,
    canActivate: [AuthGuardGuard]
  },


  {
    path: 'faq',
    children: [
      {
        path: 'FeesPricing',
        component: FeesPricingComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'borrowerfaq',
        component: BorrowerfaqComponent
      },

    ],
    component: FaqComponent
  },

  {
    path: 'privacysecuritypolicy',
    component: PrivacyPolicyComponent,
  },
  { path: 'invoicemanagent', 
  loadChildren: './invoicemanagementsystem/invoicemanagementsystem.module#InvoicemanagementsystemModule'
   },
   { path: 'finchainpay', 
  loadChildren: './finchainpay/finchainpay.module#FinchainpayModule'
   },
   {
     path: 'finpay',
     loadChildren: './finpay/finpay.module#FinpayModule'
   },

  { path: '**', component: NotFoundComponent },
 

];

@NgModule({

  imports: [RouterModule.forRoot(approutes, { useHash: true,enableTracing: false,preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
