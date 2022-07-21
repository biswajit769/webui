import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanextensionsComponent } from './loanextensions.component';
const routes: Routes = [
  {
    path:'',
    component:LoanextensionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanextensionsRoutingModule { }
