import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { LenderRoutingModule } from './lender-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { AuthGuardGuard } from '../auth-guard.guard';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PdfViewerModule } from 'ng2-pdf-viewer';

//servoces
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../services/alert.service";
import {UserService} from "../services/user.service";
import { LoginService } from '../services/login.service';
import 'hammerjs';
//Angular Material Components

import {MaterialmoduleModule} from '../materialmodule/materialmodule.module'
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

//component import 
import {LenderComponent } from './lender.component';
import { BorrowerremarksComponent } from './borrowerremarks/borrowerremarks.component';
import {LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LoanhistoryComponent } from './loanhistory/loanhistory.component';
import { HelpsComponent } from './helps/helps.component';
import { LatepaymentComponent } from './latepayment/latepayment.component';
// import { LenderRegistrationsComponent } from './lender-registrations/lender-registrations.component';
import { LoanextensionsComponent } from './loanextensions/loanextensions.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { PendingdocsComponent } from './pendingdocs/pendingdocs.component';
import { TodayduesComponent,duesdaywisepopupComponent } from './todaydues/todaydues.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { RateofinterestComponent } from './rateofinterest/rateofinterest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InvoicesComponent } from './invoices/invoices.component';
// import { ArchwizardModule } from 'angular-archwizard';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialmoduleModule,
    NgbModule.forRoot(),
    NgbAlertModule.forRoot(),
    LenderRoutingModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    PdfViewerModule, 

  ],
  declarations: [
    SidebarComponent,
    LenderComponent,
    LenderDashboardComponent,
    
    BorrowerremarksComponent,
    LoanhistoryComponent,
    HelpsComponent,
    LatepaymentComponent,
    // LenderRegistrationsComponent,
    LoanextensionsComponent,
    LoanrequestComponent,
    PendingdocsComponent,
    RateofinterestComponent,
    
    TodayduesComponent,
    
    ViewprofileComponent,
   
    duesdaywisepopupComponent,
   
    InvoicesComponent
  ],
  providers: [AuthGuardGuard,AuthenticationService, UserService,AlertService,LoginService,{
    provide:HTTP_INTERCEPTORS,useClass:AuthenticationService,multi:true
  }],
    entryComponents: [
        duesdaywisepopupComponent
      ],
})
export class LenderModule { }
