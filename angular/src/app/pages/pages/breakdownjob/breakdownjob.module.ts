import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { BreakdownjobRoutingModule } from './breakdownjob-routing.module';
import { BreakdownjobComponent } from './breakdownjob.component';

@NgModule({
  declarations: [BreakdownjobComponent],
  imports: [
    SharedModule,
    BreakdownjobRoutingModule
   
  ]
})
export class BreakdownjobModule { }
