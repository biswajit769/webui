import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanrequestComponent } from './loanrequest.component';
const routes: Routes = [
  {
    path:'',
    component:LoanrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanrequestRoutingModule { }
