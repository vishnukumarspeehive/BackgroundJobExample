import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModelRoutingModule } from './model-routing.module';
import { ModelComponent } from './model.component';

@NgModule({
  declarations: [ModelComponent],
  imports: [
    ModelRoutingModule,
    SharedModule
  ]
})
export class ModelModule { }

