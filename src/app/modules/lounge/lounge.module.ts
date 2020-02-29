import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';
import { PubTableComponent } from './pub-table/pub-table.component';

import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PubComponent,
    PubTableComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    LoungeRoutingModule,
    DragDropModule,
    SharedModule
  ],
  exports: [],
  entryComponents: []
})
export class LoungeModule { }
