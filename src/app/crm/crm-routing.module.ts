import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDashbordComponent } from './crm-dashbord/crm-dashbord.component';

const routes: Routes = [
  {
    path:'crm-dashbord',
    component:CrmDashbordComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
