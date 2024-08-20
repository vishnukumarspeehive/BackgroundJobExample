import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakdownjobComponent } from './breakdownjob.component';

const routes: Routes = [{ path: '', component: BreakdownjobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakdownjobRoutingModule { }
