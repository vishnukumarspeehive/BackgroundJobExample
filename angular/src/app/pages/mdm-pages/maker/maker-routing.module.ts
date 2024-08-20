import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakerComponent } from './maker.component';

const routes: Routes = [{ path: '', component: MakerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MakerRoutingModule { }
