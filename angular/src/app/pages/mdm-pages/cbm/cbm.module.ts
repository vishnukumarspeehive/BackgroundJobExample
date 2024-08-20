import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { CBMRoutingModule } from './cbm-routing.module';
import { CBMComponent } from './cbm.component';


@NgModule({
  declarations: [CBMComponent],
  imports: [
    SharedModule,
    CBMRoutingModule
  ]
})
export class CBMModule { }
