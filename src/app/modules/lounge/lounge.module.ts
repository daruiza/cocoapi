import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';
import { PubTableComponent } from './pub-table/pub-table.component';

import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { SharedModule } from 'src/app/shared/shared.module';
import { PubModalServiceComponent } from './pub-modal-service/pub-modal-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PubComponent,
    PubTableComponent,
    HighlightDirective,
    PubModalServiceComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    LoungeRoutingModule,
    DragDropModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  exports: [PubModalServiceComponent],
  entryComponents: [PubModalServiceComponent]
})
export class LoungeModule { }
