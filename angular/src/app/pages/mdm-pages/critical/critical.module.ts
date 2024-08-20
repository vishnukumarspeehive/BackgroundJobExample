import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
//import { SharedModule } from '../shared/shared.module';

import { CriticalRoutingModule } from './critical-routing.module';
import { CriticalComponent } from './critical.component';

@NgModule({
  declarations: [CriticalComponent],
  imports: [
    CriticalRoutingModule,
    SharedModule
  ]
})
export class MakerModule { }

