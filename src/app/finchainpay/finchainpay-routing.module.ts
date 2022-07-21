import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinpayHomeComponent } from './finpay-home/finpay-home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { OffersComponent } from './offers/offers.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';
import { FinpayloginComponent } from './finpaylogin/finpaylogin.component';
import { FinpaymainComponent } from './finpaymain/finpaymain.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component'
import { FinpaysignupComponent } from './finpaysignup/finpaysignup.component';
import { FinpaydashboardComponent } from './finpaydashboard/finpaydashboard.component';
const routes: Routes = [
  {


    path: '',
    component: FinpaymainComponent,
    children: [
      {
        path: 'finpayhome',
        component: FinpayHomeComponent
      },
      {
        path: 'shopping-loan',
        component: ShoppingComponent,
      },
      {
        path: 'offers',
        component: OffersComponent,
      },
      {
        path: 'need-help',
        component: NeedhelpComponent,
      },
      {
        path: 'flow-login',
        component: FinpayloginComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'termsnconditions',
        component: TermsconditionsComponent,
      },
      {
        path:'flow-signup',
        component: FinpaysignupComponent
      },
      {
        path:'fin-dashboard',
        component: FinpaydashboardComponent
      }
      // {
      //   path: 'customer',
      //   loadChildren: './customer/customer.module#CustomerModule'
      // },
    ]

  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinchainpayRoutingModule { }
