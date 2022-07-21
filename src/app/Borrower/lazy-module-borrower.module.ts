import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { AuthGuardGuard } from '../auth-guard.guard';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { PipesPipe } from '../pipes.pipe';
import { LazyModuleBorrowerRoutingModule } from './lazy-module-borrower-routing.module';
import { ChecklistModule } from 'angular-checklist';
//servoces
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../services/alert.service";
import {UserService} from "../services/user.service";
import { LoginService } from '../services/login.service';
import 'hammerjs';
//Angular Material Components
// import {InputEditorModule,TextAreaEditorModule} from 'angular-inline-editors';
// import { SelectEditorModule } from 'angular-inline-editors';
import { ArchwizardModule } from 'angular-archwizard';
import {MaterialmoduleModule} from '../materialmodule/materialmodule.module'
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerdashboardComponent } from '../Borrower/borrowerdashboard/borrowerdashboard.component';
import { ViewBorrowerProfileComponent } from '../Borrower/view-borrower-profile/view-borrower-profile.component';
import { RequestbylenderComponent } from '../Borrower/requestbylender/requestbylender.component';
import { UploadDocsComponent} from '../Borrower/upload-docs/upload-docs.component';
import { BorrowerLatepaymentComponent } from '../Borrower/borrower-latepayment/borrower-latepayment.component';
import { ThankyoupageComponent } from '../Borrower/thankyoupage/thankyoupage.component';
import { NewloanRequestComponent } from '../Borrower/newloan-request/newloan-request.component';
import { DashboardDetailsComponent } from '../Borrower/dashboard-details/dashboard-details.component';
import { LenderListComponent } from '../Borrower/lender-list/lender-list.component';
import { LoanExtensionComponent } from '../Borrower/loan-extension/loan-extension.component';
import { LoanHistoryComponent } from '../Borrower/loan-history/loan-history.component';
import { HelpComponent } from '../Borrower/help/help.component';
// import { BorrowerdashboardComponent } from '../Borrower/borrowerdashboard/borrowerdashboard.component';
import { InvoiceComponent } from '../Borrower/invoice/invoice.component';



@NgModule({
  imports: [
    CommonModule,
    LazyModuleBorrowerRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialmoduleModule,
    NgbModule.forRoot(),
    NgbAlertModule.forRoot(),
    Ng2OrderModule,
    Ng2SearchPipeModule,
   NgxPaginationModule,
   Ng2OrderModule,
   Ng2SearchPipeModule,
    ChecklistModule,
     //including into imports
  //  InputEditorModule,
  //  TextAreaEditorModule,
  //  SelectEditorModule,
   PdfViewerModule,
   ArchwizardModule,
  ],
  declarations: [BorrowerdashboardComponent,
    ViewBorrowerProfileComponent,
    RequestbylenderComponent,
    UploadDocsComponent,
    BorrowerLatepaymentComponent,
    ThankyoupageComponent,
    NewloanRequestComponent,
    DashboardDetailsComponent,
    LenderListComponent,
    LoanExtensionComponent,
    LoanHistoryComponent,
    InvoiceComponent,
    HelpComponent],
    providers: [AuthGuardGuard,AuthenticationService, UserService,AlertService,LoginService,{
        provide:HTTP_INTERCEPTORS,useClass:AuthenticationService,multi:true
      }]
})
export class LazyModuleBorrowerModule { }