import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingdocsComponent } from './pendingdocs.component';
const routes: Routes = [
  {
    path:'',
    component:PendingdocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingdocsRoutingModule { }
