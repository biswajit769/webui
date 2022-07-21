import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanextensionsRoutingModule} from './loanextensions-routing.module';
// import { LoanextensionsComponent} from './loanextensions.component';
import { BsDatepickerModule,DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  	
  imports: [
    CommonModule,
    LoanextensionsRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [],
  // entryComponents:[AccStatement]
})
export class LoanextensionsModule { }
