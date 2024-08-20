import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CBMComponent } from './cbm.component';

const routes: Routes = [{ path: '', component: CBMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CBMRoutingModule { }
