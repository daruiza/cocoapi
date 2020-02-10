import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';


@NgModule({
  declarations: [PubComponent],
  imports: [
    CommonModule,
    LoungeRoutingModule
  ]
})
export class LoungeModule { }
