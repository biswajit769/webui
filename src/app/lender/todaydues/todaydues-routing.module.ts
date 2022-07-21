import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayduesComponent } from './todaydues.component';
const routes: Routes = [
  {
    path:'',
    component:TodayduesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayduesRoutingModule { }
