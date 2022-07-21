import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormGroup , FormControl,FormsModule} from "@angular/forms";

import { InvoicemanagementsystemRoutingModule } from './invoicemanagementsystem-routing.module';
import { InvoicemanagementComponent } from './invoicemanagement/invoicemanagement.component';
import { OrganizationModule } from './organization/organization.module';
import { CustomerModule } from './customer/customer.module';
import { InvoicesystemadminModule } from './invoicesystemadmin/invoicesystemadmin.module';
import { Header2Component } from './header2/header2.component';
import { Footer2Component } from './footer2/footer2.component';
import { Home2Component } from './home2/home2.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './registrations/signup/signup.component';
import { Forgotpassword1Component } from './registrations/forgotpassword1/forgotpassword1.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicemanagementsystemRoutingModule,
    OrganizationModule,
    CustomerModule,
    InvoicesystemadminModule,ReactiveFormsModule,FormsModule
  ],
  declarations: [InvoicemanagementComponent, Header2Component, Footer2Component, Home2Component, Login2Component, SignupComponent, Forgotpassword1Component]
})
export class InvoicemanagementsystemModule { }
