import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ClosureModalComponent } from './closure-modal/closure-modal.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ClosureModalComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    SharedModule,
  ],
  exports: [ClosureModalComponent],
  entryComponents: [ClosureModalComponent]
})
export class HeaderModule { }
