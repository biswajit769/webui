import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule ,FormGroup , FormControl} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { FilterPipeModule } from 'ngx-filter-pipe';
import { AuthGuardGuard } from './auth-guard.guard';
//componets
import { HomeComponent } from './landing/home/home.component';
import { LoginComponent } from './home/login/login.component';

import { ResetPasswordComponent } from './home/reset-password/reset-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactusComponent } from './landing/contactus/contactus.component';
import { MediaroomComponent } from './landing/mediaroom/mediaroom.component';
import { HowItWorksComponent } from './landing/how-it-works/how-it-works.component';
import { AboutusComponent } from './landing/aboutus/aboutus.component';
import { TermsOfUseComponent } from './landing/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './landing/privacy-policy/privacy-policy.component';
import { FaqComponent } from './landing/faq/faq.component';
import { RegistrationComponent } from './landing/faq/registration/registration.component';
import { FeesPricingComponent } from './landing/faq/fees-pricing/fees-pricing.component';
// import { PipesPipe } from './pipes.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
//servoces
import {AuthenticationService} from "./services/authentication.service";
import {AlertService} from "./services/alert.service";
import {UserService} from "./services/user.service";
import { LoginService } from './services/login.service';
import { BorrowerfaqComponent } from './landing/faq/borrowerfaq/borrowerfaq.component';
//lender reg with all popup component
import { LandingpageComponent,landingregpopup,termsofusepopuppage,lendersuccessRegpopup,privacypolicypopuppage} from './landing/lender-landingpage/landingpage.component';
//angularmatrial
import 'hammerjs';
//Angular Material Components

import {MaterialmoduleModule} from './materialmodule/materialmodule.module'

//scroll
import { ScrollToModule } from 'ng2-scroll-to-el';
//popup components
import {BorrowLandingComponent,borrowerregpopup,successRegpopup,termsofusepopup,privacypolicypopup} from './landing/borrow-landing/borrow-landing.component';


import { LenderRegistrationsComponent,lenderRegSucess } from './lender/lender-registrations/lender-registrations.component';
import { CompanyRegistrationComponent,CompanyRegSucess } from './Borrower/company-registration/company-registration.component';
import { ForgotpasswordpageComponent } from './home/forgotpasswordpage/forgotpasswordpage.component';
import { ArchwizardModule } from 'angular-archwizard';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UploadDocsComponent, DocsUploadSucess } from './Borrower/upload-docs/upload-docs.component';
// import { LoanextensionsComponent,AccStatement } from './lender/loanextensions/loanextensions.component';
import {AccStatement } from './lender/loanextensions/loanextensions.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AdvantagesComponent } from './landing/advantages/advantages.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CompanyRegSucess,
    lenderRegSucess,
    ForgotpasswordpageComponent,
    ResetPasswordComponent,
    HeaderComponent,
    DocsUploadSucess,
    FooterComponent,
    ContactusComponent,
    MediaroomComponent,
    HowItWorksComponent,
    AboutusComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    
    FaqComponent,
    RegistrationComponent,
    FeesPricingComponent,
    BorrowLandingComponent,
    // PipesPipe,
    // FilterPipeModule,
    BorrowerfaqComponent,
    LandingpageComponent,
    borrowerregpopup,
    
    successRegpopup,termsofusepopup, 
    privacypolicypopup,
    successRegpopup,
    termsofusepopuppage,lendersuccessRegpopup,privacypolicypopuppage,
   
    LenderRegistrationsComponent,
    CompanyRegistrationComponent,
   
    // LoanextensionsComponent,
    AccStatement,
    AdvantagesComponent,
    NotFoundComponent,
    
    
      
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialmoduleModule,
   NgbModule.forRoot(),
   AlertModule.forRoot(),
   ScrollToModule.forRoot(),
   NgxPaginationModule,
   Ng2OrderModule,
   Ng2SearchPipeModule, //including i1111111111111111nto imports
   PdfViewerModule,
   ArchwizardModule,
  
   BsDatepickerModule.forRoot(),
  

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuardGuard,AuthenticationService, UserService,AlertService,LoginService,{
    provide:HTTP_INTERCEPTORS,useClass:AuthenticationService,multi:true
  }],
  bootstrap: [AppComponent],
  
  entryComponents: [borrowerregpopup,successRegpopup,AccStatement
    ,CompanyRegSucess,termsofusepopup,privacypolicypopup,termsofusepopuppage,lenderRegSucess,lendersuccessRegpopup,privacypolicypopuppage,DocsUploadSucess]
})
export class AppModule { }
