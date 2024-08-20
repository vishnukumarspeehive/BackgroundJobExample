import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticalComponent } from './critical.component';

const routes: Routes = [{ path: '', component: CriticalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CriticalRoutingModule { }
