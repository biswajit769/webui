import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CrmRoutingModule } from './crm-routing.module';
import { CrmDashbordComponent } from './crm-dashbord/crm-dashbord.component';

@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    FormsModule,
    NgxPaginationModule,
    FilterPipeModule
  ],
  declarations: [CrmDashbordComponent]
})
export class CrmModule { 

}
