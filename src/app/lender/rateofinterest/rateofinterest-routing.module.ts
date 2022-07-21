import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateofinterestComponent } from './rateofinterest.component';
const routes: Routes = [
  {
    path:'',
    component:RateofinterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateofinterestRoutingModule { }
