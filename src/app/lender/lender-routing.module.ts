import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import {LenderComponent } from './lender.component';
import {LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { BorrowerremarksComponent } from './borrowerremarks/borrowerremarks.component';
import { HelpsComponent } from './helps/helps.component';
import { LatepaymentComponent } from './latepayment/latepayment.component';
import { LoanextensionsComponent } from './loanextensions/loanextensions.component';
import { LoanhistoryComponent } from './loanhistory/loanhistory.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { PendingdocsComponent } from './pendingdocs/pendingdocs.component';
import { RateofinterestComponent } from './rateofinterest/rateofinterest.component';
import { TodayduesComponent } from './todaydues/todaydues.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  { path: 'lender', component: LenderComponent},
  {
      path: "",
      component: LenderComponent,
      
      children: [

            {
            path: "lenderdashboard",
            component: LenderDashboardComponent,
            canActivate: [AuthGuardGuard]
            },
          
        
            {
            path: "Borrowerremarks",
            component: BorrowerremarksComponent,
            canActivate: [AuthGuardGuard]
            },
            {
            path: "Helpspage",
            component: HelpsComponent,
            canActivate: [AuthGuardGuard]
            },
            {
            path: "latepayments",
            component:  LatepaymentComponent,
            canActivate: [AuthGuardGuard]
            },
            {
            path: "loanExtension",
            component:  LoanextensionsComponent,
            canActivate: [AuthGuardGuard]
            },
            {
              path: "loanhistory",
              component:  LoanhistoryComponent,
              canActivate: [AuthGuardGuard]
              },
              {
                path: "loanrequest",
                component:  LoanrequestComponent,
                canActivate: [AuthGuardGuard]
                },
                {
                  path: "pendingdocs",
                  component:PendingdocsComponent,
                  canActivate: [AuthGuardGuard]
                  },
                  {
                    path: "rateofinterest",
                    component:RateofinterestComponent,
                    canActivate: [AuthGuardGuard]
                    },  
                   
                      {
                        path: "todaysdues",
                        component:TodayduesComponent,
                        canActivate: [AuthGuardGuard] 
                        },
                    
                                               
                        {
                          path: "viewprofile",
                          component:ViewprofileComponent,
                          canActivate: [AuthGuardGuard]
                          },  
    
                          {
                          path: "invoices",
                          component:InvoicesComponent,
                          canActivate: [AuthGuardGuard]
                          },  
    





            ]
            }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule { }


