import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CALLSPage } from './calls.page';

const routes: Routes = [
  {
    path: '',
    component: CALLSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CALLSPageRoutingModule {}
