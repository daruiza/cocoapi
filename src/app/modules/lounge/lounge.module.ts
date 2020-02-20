import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';
import { PubTableComponent } from './pub-table/pub-table.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PubComponent, PubTableComponent],
  imports: [
    CommonModule,
    LoungeRoutingModule,
    DragDropModule,
    MatIconModule,
  ]
})
export class LoungeModule { }
