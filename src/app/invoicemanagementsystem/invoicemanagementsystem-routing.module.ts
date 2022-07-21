import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicemanagementComponent } from './invoicemanagement/invoicemanagement.component';
import { Home2Component } from './home2/home2.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './registrations/signup/signup.component';
import { Forgotpassword1Component } from './registrations/forgotpassword1/forgotpassword1.component';
const routes: Routes = [
  

  { path: '', 

  component: InvoicemanagementComponent ,
children: [
  {
    path: 'Invoice',
    component: Home2Component,

  },
  {
    path: 'Invoicelogin',
    component: Login2Component,

  },
  {
    path: 'signup2',
    component: SignupComponent,

  },
  {
    path: 'forgotpassword2',
    component: Forgotpassword1Component,

  },
  { 
    path: 'customer', 
   loadChildren: './customer/customer.module#CustomerModule' },
  { path: 'organization', 
  loadChildren: './organization/organization.module#OrganizationModule'
  },
  { path: 'invoicemanagementadmin', 
  loadChildren: './invoicesystemadmin/invoicesystemadmin.module#InvoicesystemadminModule'
  }
  ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicemanagementsystemRoutingModule { }
