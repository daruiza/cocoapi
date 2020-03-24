import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoungeRoutingModule } from './lounge-routing.module';
import { PubComponent } from './pub/pub.component';
import { PubTableComponent } from './pub-table/pub-table.component';

import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

import { PubModalServiceComponent } from './pub-modal-service/pub-modal-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    MatTabsModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    PubModalServiceComponent,
    PubModalOrderComponent,
    PubModalAccountComponent,
    MatTabsModule,
    MatTableModule
  ],
  entryComponents: [
    PubModalServiceComponent,
    PubModalOrderComponent,
    PubModalAccountComponent]
})
export class LoungeModule { }
