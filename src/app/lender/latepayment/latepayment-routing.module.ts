import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatepaymentComponent } from './latepayment.component';
const routes: Routes = [
{
  path:'',
  component:LatepaymentComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatepaymentRoutingModule { }
