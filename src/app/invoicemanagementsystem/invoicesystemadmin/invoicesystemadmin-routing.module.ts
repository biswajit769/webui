import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceadminhomeComponent } from './invoiceadminhome/invoiceadminhome.component';
import { InvoiceadminsidebarComponent } from './invoiceadminsidebar/invoiceadminsidebar.component';
const routes: Routes = [
  { path: '', 

  component: InvoiceadminhomeComponent ,
children: [
  {
    path: 'Invoiceadmindashborad',
    component: InvoiceadminsidebarComponent,

  },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesystemadminRoutingModule { }
