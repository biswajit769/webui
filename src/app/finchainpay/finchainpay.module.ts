import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { FinchainpayRoutingModule } from './finchainpay-routing.module';
import { FinpayHomeComponent } from './finpay-home/finpay-home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { OffersComponent } from './offers/offers.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';
import { FinpayloginComponent } from './finpaylogin/finpaylogin.component';
import { FinpaymainComponent } from './finpaymain/finpaymain.component';
import {MaterialmoduleModule} from '../materialmodule/materialmodule.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { FinpayfooterComponent } from './finpayfooter/finpayfooter.component'
import { NgOtpInputModule } from  'ng-otp-input';
import { FinpaysignupComponent } from './finpaysignup/finpaysignup.component';
import { FinpaydashboardComponent } from './finpaydashboard/finpaydashboard.component';
import { FormsModule } from '@angular/forms';
// import { MatFileUploadModule } from 'angular-material-fileupload';
@NgModule({
  imports: [
    CommonModule,
    FinchainpayRoutingModule,
    MaterialmoduleModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    FormsModule,
    // MatFileUploadModule
  ],
  declarations: [FinpayHomeComponent, ShoppingComponent, OffersComponent, NeedhelpComponent, FinpayloginComponent, FinpaymainComponent, AboutUsComponent, PrivacyPolicyComponent, TermsconditionsComponent, FinpayfooterComponent, FinpaysignupComponent, FinpaydashboardComponent]
})
export class FinchainpayModule { }
