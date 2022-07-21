import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';

import { BorrowerdashboardComponent } from './borrowerdashboard/borrowerdashboard.component';
import { ViewBorrowerProfileComponent } from './view-borrower-profile/view-borrower-profile.component';
import { RequestbylenderComponent } from './requestbylender/requestbylender.component';
import { UploadDocsComponent} from './upload-docs/upload-docs.component';
import { BorrowerLatepaymentComponent } from './borrower-latepayment/borrower-latepayment.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { NewloanRequestComponent } from './newloan-request/newloan-request.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { LenderListComponent } from './lender-list/lender-list.component';
import { LoanExtensionComponent } from './loan-extension/loan-extension.component';
import { LoanHistoryComponent } from './loan-history/loan-history.component';
import { HelpComponent } from './help/help.component';
import { InvoiceComponent } from '../Borrower/invoice/invoice.component';

const routes: Routes = [
    {
        path: 'Borrower_Dashboardview',
        component: BorrowerdashboardComponent
      },
    {
        
        path: '',
        children: [
          {
            path: 'Dashboard-Details',
            component: DashboardDetailsComponent,
          },
    
          {
            path: 'Lender-List',
            component: LenderListComponent,
          },
          {
            path: 'Loan-Extension',
            component: LoanExtensionComponent,
          },
          {
            path: 'Loan-History',
            component: LoanHistoryComponent,
          },
          {
            path: 'Newloan-Request',
            component: NewloanRequestComponent,
          },
          {
            path: 'Request-By-Lender',
            component: RequestbylenderComponent,
          },
          {
            path: 'Thank-You-Page',
            component: ThankyoupageComponent,
          },
          {
            path: 'Upload_Docs',
            component: UploadDocsComponent,
          },
          {
            path: 'View-Borrow-Profile',
            component: ViewBorrowerProfileComponent,
          },
          {
            path: 'Borrower-Latepayment',
            component: BorrowerLatepaymentComponent,
          },
          {
            path: 'Help',
            component: HelpComponent,
          },
          {
            path: 'invoices',
            component: InvoiceComponent,
          },
    
        ],
        component: BorrowerdashboardComponent,
        canActivate: [AuthGuardGuard]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleBorrowerRoutingModule { }