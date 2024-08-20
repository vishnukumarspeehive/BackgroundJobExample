import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
//import { SharedModule } from '../shared/shared.module';

import { MakerRoutingModule } from './maker-routing.module';
import { MakerComponent } from './maker.component';

@NgModule({
  declarations: [MakerComponent],
  imports: [
    MakerRoutingModule,
    SharedModule
  ]
})
export class MakerModule { }

