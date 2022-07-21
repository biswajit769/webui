import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanrequestRoutingModule } from './loanrequest-routing.module';
// import { LoanrequestComponent } from './loanrequest.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,
    LoanrequestRoutingModule,HttpClientModule
  ],
  declarations: []
})
export class LoanrequestModule { }
