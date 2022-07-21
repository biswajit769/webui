import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowerremarksComponent } from './borrowerremarks.component';
const routes: Routes = [
  {
    path:'',
    component:BorrowerremarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerremarksRoutingModule { }
