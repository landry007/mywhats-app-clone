import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CALLSPageRoutingModule } from './calls-routing.module';

import { CALLSPage } from './calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CALLSPageRoutingModule
  ],
  declarations: [CALLSPage]
})
export class CALLSPageModule {}
