import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenderDashboardComponent } from './lender-dashboard.component';
const routes: Routes = [
  {
    path: '', component: LenderDashboardComponent

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderDashboardRoutingModule { }
