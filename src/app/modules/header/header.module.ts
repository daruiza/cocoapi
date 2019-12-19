import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ToolbarrComponent } from './toolbarr/toolbarr.component';


@NgModule({
  declarations: [ToolbarrComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    ToolbarrComponent
  ]
})
export class HeaderModule { }
