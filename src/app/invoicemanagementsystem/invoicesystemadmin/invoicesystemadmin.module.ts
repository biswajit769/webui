import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesystemadminRoutingModule } from './invoicesystemadmin-routing.module';
import { InvoiceadminhomeComponent } from './invoiceadminhome/invoiceadminhome.component';
import { InvoiceadminsidebarComponent } from './invoiceadminsidebar/invoiceadminsidebar.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesystemadminRoutingModule
  ],
  declarations: [InvoiceadminhomeComponent, InvoiceadminsidebarComponent]
})
export class InvoicesystemadminModule { }
