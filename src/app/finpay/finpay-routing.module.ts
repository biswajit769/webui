import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditComponent } from './credit/credit.component';
import { PermissionComponent } from './permission/permission.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LockComponent } from './lock/lock.component';


const routes: Routes = [
{
	path:'',
	component:HomeComponent
},
{
	path:'credit',
	component:CreditComponent
},
{
	path:'permission',
	component:PermissionComponent
},
{
	path:'access',
	component:AccessComponent
},
{
	path:'login',
	component:LoginComponent
},
{
	path:'features',
	component:FeaturesComponent
},
{
	path:'signup',
	component:SignupComponent
},
{
	path:'dashboard',
	component:DashboardComponent
},
{
	path:'lock',
	component:LockComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinpayRoutingModule { }
