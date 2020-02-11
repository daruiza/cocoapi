import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';
import { PubTableComponent } from './pub-table/pub-table.component';


@NgModule({
  declarations: [PubComponent, PubTableComponent],
  imports: [
    CommonModule,
    LoungeRoutingModule
  ]
})
export class LoungeModule { }
