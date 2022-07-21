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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
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
import { AdminRoutingModule } from './admin-routing.module';
//Admin all pages
import {AdminComponent } from '../Admin/admin/admin.component';
import {AdminHomeComponent } from '../Admin/admin-home/admin-home.component';
import {ManageborrowerComponent,ManageProcessingComponent,ManageCompletedComponent} from '../Admin/manageborrower/manageborrower.component';
import {ManagefeeComponent } from '../Admin/managefee/managefee.component';
import {ManagelendersComponent, RegisteredNbfcComponent } from '../Admin/managelenders/managelenders.component';
import {ManageloansComponent } from '../Admin/manageloans/manageloans.component';
import {PayinfoComponent,filterdaysDialogComponent } from '../Admin/payinfo/payinfo.component';
import {PaymentinfoComponent,paymentdetaispopupComponent } from '../Admin/paymentinfo/paymentinfo.component';
import { NonKarnatakaComponent } from '../Admin/non-karnataka/non-karnataka.component';
import { PendingloansComponent } from '../Admin/manageloans/pendingloans/pendingloans.component';
import { AcceptedloansComponent } from '../Admin/manageloans/acceptedloans/acceptedloans.component';
import { DibursedloansComponent } from '../Admin/manageloans/dibursedloans/dibursedloans.component';
import { ClosedloansComponent } from '../Admin/manageloans/closedloans/closedloans.component';
import { FiltervaluePipe,FilterSearchPipe,FilterRegisterPipe,FilterBorrowerPipe,FilterCompanyPipe,FilterCompletePipe } from'./../pipes.pipe';
import {LandingpageComponent,landingregpopup} from '../landing/lender-landingpage/landingpage.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialmoduleModule,
    NgbModule.forRoot(),
    NgbAlertModule.forRoot(),
    Ng2OrderModule,
    Ng2SearchPipeModule,
    PdfViewerModule,
   NgbModule.forRoot(),
   NgxPaginationModule,
   Ng2OrderModule,
   Ng2SearchPipeModule, //including into imports
  //  InputEditorModule.forRoot(),
  //  TextAreaEditorModule.forRoot(),
  //  SelectEditorModule.forRoot(),
  //  PdfViewerModule,
   ArchwizardModule,
   BsDatepickerModule.forRoot(),
  ],
  declarations: [AdminComponent, AdminHomeComponent,    ManageloansComponent,
    ManagefeeComponent,
    ManageborrowerComponent,
    ManageProcessingComponent,
    ManageCompletedComponent,
    ManagelendersComponent,
    RegisteredNbfcComponent,
    PayinfoComponent,
    PaymentinfoComponent,
    paymentdetaispopupComponent,
    FiltervaluePipe,
    FilterSearchPipe,
    FilterRegisterPipe,
    FilterBorrowerPipe ,
    FilterCompanyPipe,
    FilterCompletePipe,
  
    

    
    NonKarnatakaComponent,
    PendingloansComponent,
    AcceptedloansComponent,
    DibursedloansComponent,
  

    ClosedloansComponent,
    
    

  
   
   
    filterdaysDialogComponent,
    landingregpopup,PipesPipe],
    providers: [AuthGuardGuard,AuthenticationService, UserService,AlertService,LoginService,{
        provide:HTTP_INTERCEPTORS,useClass:AuthenticationService,multi:true
      }],
      entryComponents: [
        filterdaysDialogComponent,paymentdetaispopupComponent
      ],
})
export class AdminModule { }