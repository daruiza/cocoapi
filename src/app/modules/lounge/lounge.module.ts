import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';
import { PubTableComponent } from './pub-table/pub-table.component';

import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { SharedModule } from 'src/app/shared/shared.module';

import { PubModalServiceComponent } from './pub-modal-service/pub-modal-service.component';
import { PubModalOrderComponent } from './pub-modal-order/pub-modal-order.component';
import { PubProductComponent } from './pub-product/pub-product.component';
import { PubModalAccountComponent } from './pub-modal-account/pub-modal-account.component';

@NgModule({
  declarations: [
    PubComponent,
    PubTableComponent,
    HighlightDirective,
    PubModalServiceComponent,
    PubModalOrderComponent,
    PubProductComponent,
    PubModalAccountComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    LoungeRoutingModule,
    DragDropModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    PubModalServiceComponent,
    PubModalOrderComponent,
    PubModalAccountComponent,
  ],
  entryComponents: [
    PubModalServiceComponent,
    PubModalOrderComponent,
    PubModalAccountComponent]
})
export class LoungeModule { }
