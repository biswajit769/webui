import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Admin all pages
import { AdminComponent } from '../Admin/admin/admin.component';
import { AdminHomeComponent } from '../Admin/admin-home/admin-home.component';
import { ManageborrowerComponent, ManageProcessingComponent, ManageCompletedComponent } from '../Admin/manageborrower/manageborrower.component';
import { ManagefeeComponent } from '../Admin/managefee/managefee.component';
import { ManagelendersComponent, RegisteredNbfcComponent } from '../Admin/managelenders/managelenders.component';
import { ManageloansComponent } from '../Admin/manageloans/manageloans.component';
import { PayinfoComponent } from '../Admin/payinfo/payinfo.component';
import { PaymentinfoComponent } from '../Admin/paymentinfo/paymentinfo.component';
import { NonKarnatakaComponent } from '../Admin/non-karnataka/non-karnataka.component';
import { PendingloansComponent } from '../Admin/manageloans/pendingloans/pendingloans.component';
import { AcceptedloansComponent } from '../Admin/manageloans/acceptedloans/acceptedloans.component';
import { DibursedloansComponent } from '../Admin/manageloans/dibursedloans/dibursedloans.component';
import { ClosedloansComponent } from '../Admin/manageloans/closedloans/closedloans.component';
import { LandingpageComponent, landingregpopup } from '../landing/lender-landingpage/landingpage.component';
//authguards
import { AuthGuardGuard } from '../auth-guard.guard';

const routes: Routes = [

    //admin paths

    {
        path: '',
        children: [

            {
                path: '', redirectTo: 'admin-home',
                pathMatch: 'full'
            },

            {
                path: 'admin-home',
                component: AdminHomeComponent,
                canActivate: [AuthGuardGuard]
            },

            {
                path: 'nbfcInitialRegistration',
                component: landingregpopup,
            },
           

          
         

           

            {
                path: 'manageborrower',
                component: ManageborrowerComponent,
            },
            {
                path: 'manageCompanyProcess',
                component: ManageProcessingComponent,
            },
            {
                path: 'manageCompletedProcess',
                component: ManageCompletedComponent,
            },
            {
                path: 'managefee',
                component: ManagefeeComponent,
            },

            {
                path: 'managelenders',
                component: ManagelendersComponent,
            },


            {
                path: 'registerednbfc',
                component: RegisteredNbfcComponent,
            },

            {
                path: 'manageloans',
                children: [
                    {
                        path: 'pendingloans',
                        component: PendingloansComponent,
                    },

                    {
                        path: 'acceptedloans',
                        component: AcceptedloansComponent,
                    },
                    {
                        path: 'dibursedloans',
                        component: DibursedloansComponent,
                    },
                  
                  
                    {
                        path: 'closedloans',
                        component: ClosedloansComponent,
                    },
                 
                  
                 

                 
                 
                ],
                component: ManageloansComponent,
            },

          

            {
                path: 'payinfo',
                component: PayinfoComponent,
            },

            {
                path: 'paymentinfo',
           
                component: PaymentinfoComponent,
            },

         
        
          
            {
                path: 'nonkarnataka',
                component: NonKarnatakaComponent,
            },
            //    { path: '**', component: PageNotFoundComponent },

        ],
        component: AdminComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }