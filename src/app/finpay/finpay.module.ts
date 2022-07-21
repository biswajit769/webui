import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialmoduleModule } from '../../app/materialmodule/materialmodule.module';

import { FinpayRoutingModule } from './finpay-routing.module';
import { HomeComponent } from './home/home.component';
import { CreditComponent } from './credit/credit.component';
import { PermissionComponent } from './permission/permission.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { LockComponent } from './lock/lock.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FinpayRoutingModule,
    MaterialmoduleModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HomeComponent, CreditComponent, PermissionComponent, AccessComponent, LoginComponent, FeaturesComponent, SignupComponent, DashboardComponent, LockComponent]
})
export class FinpayModule { }
