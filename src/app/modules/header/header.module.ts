import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ClosureModalComponent } from './closure-modal/closure-modal.component';

@NgModule({
  declarations: [
    ClosureModalComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
  ],
  exports: [
  ],
  entryComponents: [ClosureModalComponent]
})
export class HeaderModule { }
